import {connectDB} from "../../../../lib/mongodb.js"
import Item from "@/models/Item";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const item = await Item.findById(id).populate("postedBy");

    if (!item) {
      return NextResponse.json(
        { message: "Item not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(item);
  } 
  catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch item", error: error.message },
      { status: 500 }
    );
  }
}
