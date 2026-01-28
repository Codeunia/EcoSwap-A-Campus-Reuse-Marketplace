import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Item from "@/models/Item";
import { getAuthUser } from "@/lib/auth";

export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json(
        { message: "Please login to like" },
        { status: 401 }
      );
    }

    const item = await Item.findById(id);
    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    if (!Array.isArray(item.likes)) {
      item.likes = [];
    }

    const index = item.likes.findIndex(
      (u) => u.toString() === user._id.toString()
    );

    let liked;

    if (index > -1) {
      // UNLIKE
      item.likes.splice(index, 1);
      liked = false;
    } else {
      // LIKE
      item.likes.push(user._id);
      liked = true;
    }

    await item.save();

    return NextResponse.json({
      liked,
      likes: item.likes,
    });
  } catch (err) {
    console.error("LIKE ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
