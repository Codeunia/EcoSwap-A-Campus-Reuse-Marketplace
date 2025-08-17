// import { NextResponse } from "next/server";
// import {connectDB} from "../../../lib/mongodb";
// import Item from "../../../models/Item";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const body = await req.json();

//     const {
//       title,
//       description,
//       category,
//       condition,
//       type,
//       price,
//       contactMethod,
//       meetingLocation = "",
//       availability = "flexible",
//       photos = [],
//     } = body;

//     // Save to MongoDB
//     const newItem = new Item({
//       title,
//       description,
//       category,
//       condition,
//       type,
//       price,
//       contactMethod,
//       meetingLocation,
//       availability,
//       photos,
//     });

//     await newItem.save();

//     return NextResponse.json(
//       { message: "Item posted successfully", item: newItem },
//       { status: 201 }
//     );
//   } catch (err) {
//     console.error("Error posting item:", err);
//     return NextResponse.json(
//       { message: "Failed to post item", error: err.message },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     await connectDB();
//     const items = await Item.find().sort({ createdAt: -1 });
//     return NextResponse.json(items, { status: 200 });
//   } catch (err) {
//     console.error("Error fetching items:", err);
//     return NextResponse.json(
//       { message: "Failed to fetch items", error: err.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
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
    return NextResponse.json(
      { message: "Failed to post item", error: err.message },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    let filter = {};
    if (category) {
      filter.category = new RegExp(`^${category.replace("-", " ")}$`, "i");
    }

    const items = await Item.find(filter).sort({ createdAt: -1 });

    return NextResponse.json(items, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to fetch items", error: err.message },
      { status: 500 }
    );
  }
}
