import { NextResponse } from "next/server";
import {connectDB} from "../../../lib/mongodb";
import Item from "../../../models/Item";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      title,
      description,
      category,
      condition,
      type,
      price,
      contactMethod,
      meetingLocation = "",
      availability = "flexible",
      photos = [],
    } = body;

    // Save to MongoDB
    const newItem = new Item({
      title,
      description,
      category,
      condition,
      type,
      price,
      contactMethod,
      meetingLocation,
      availability,
      photos,
    });

    await newItem.save();

    return NextResponse.json(
      { message: "Item posted successfully", item: newItem },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error posting item:", err);
    return NextResponse.json(
      { message: "Failed to post item", error: err.message },
      { status: 500 }
    );
  }
}
