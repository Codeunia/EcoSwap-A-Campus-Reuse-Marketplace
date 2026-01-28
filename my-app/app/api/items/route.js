// import { NextResponse } from "next/server";
// import connectDB  from "../../../lib/mongodb";
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
//       email,
//       phone,
//       availability = "flexible",
//       photos = [],
//     } = body;

//     const newItem = new Item({
//       title,
//       description,
//       category,
//       condition,
//       type,

//       price: type === "sell" ? price : null,

//       contactMethod,

//       email: contactMethod === "email" ? email : null,
//       phone: contactMethod === "phone" ? phone : null,

//       availability,
//       photos,
//     });

//     await newItem.save();

//     return NextResponse.json(
//       { message: "Item posted successfully", item: newItem },
//       { status: 201 }
//     );
//   } 
//   catch (err) {
//     // console.error(err);
//     return NextResponse.json(
//       { message: "Failed to post item", error: err.message },
//       { status: 500 }
//     );
//   }
// }

// import User from "../../../models/User";
import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Item from "../../../models/Item";
import { getAuthUser } from "../../../lib/auth";

export async function POST(req) {
  try {
    await connectDB();

    const user = await getAuthUser();
    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }
    console.log("AUTH USER:", user);

    const body = await req.json();

    const newItem = new Item({
      ...body,
      postedBy: user._id, 
    });

    await newItem.save();

    return NextResponse.json(newItem, { status: 201 });
  } catch (err) {
    console.error("POST ITEM ERROR:", err);
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

    const items = await Item.find(filter)
    .populate("postedBy", "firstName lastName email")
    .sort({ createdAt: -1 });

    return NextResponse.json(items, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to fetch items", error: err.message },
      { status: 500 }
    );
  }
}
