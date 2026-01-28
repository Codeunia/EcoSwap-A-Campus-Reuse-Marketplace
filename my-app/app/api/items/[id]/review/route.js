import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import Item from "@/models/Item";

export async function POST(req, { params }) {
  try {
    const { id } = await params;

    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json(
        { message: "Please login to review" },
        { status: 401 }
      );
    }

    const { rating, comment } = await req.json();

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { message: "Invalid rating" },
        { status: 400 }
      );
    }

    const item = await Item.findById(id);
    if (!item) {
      return NextResponse.json(
        { message: "Item not found" },
        { status: 404 }
      );
    }

    // prevent duplicate reviews
    const alreadyReviewed = item.reviews.some(
      (r) => r.userId === user._id.toString()
    );

    if (alreadyReviewed) {
      return NextResponse.json(
        { message: "You already reviewed this item" },
        { status: 400 }
      );
    }

    item.reviews.push({
      userId: user._id.toString(),
      userName: `${user.firstName} ${user.lastName}`,
      rating,
      comment,
      createdAt: new Date(),
    });

    await item.save();

    return NextResponse.json(item.reviews, { status: 201 });
  } catch (err) {
    console.error("❌ Review error:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
