import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Item from "@/models/Item";

export async function GET(req, { params }) {
  await connectDB();

  const user = await User.findById(params.id).select(
    "firstName lastName email"
  );

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const items = await Item.find({ postedBy: params.id }).sort({
    createdAt: -1,
  });

  return NextResponse.json({ user, items });
}
