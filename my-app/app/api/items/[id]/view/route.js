import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Item from "@/models/Item";

export async function PATCH(_, { params }) {
  await connectDB();

  const { id } = await params; 

  await Item.findByIdAndUpdate(id, {
    $inc: { views: 1 },
  });

  return NextResponse.json({ success: true });
}
