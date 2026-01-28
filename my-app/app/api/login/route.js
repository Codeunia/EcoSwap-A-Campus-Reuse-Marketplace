// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import User from "../../../models/User.js";
// import { connectDB } from "../../../lib/mongodb.js";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { email, password, accountType } = await req.json();

//     const user = await User.findOne({ email, accountType });
//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
//     }

//     return NextResponse.json({
//       message: "Login successful",
//       user: {
//         id: user._id,
//         email: user.email,
//         accountType: user.accountType,
//         firstName: user.firstName || "",
//         lastName: user.lastName || "",
//       },
//     });
//   } 
//   catch (err) {
//     return NextResponse.json({ message: err.message }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../models/User";
import connectDB  from "../../../lib/mongodb";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password, accountType } = await req.json();

    const user = await User.findOne({ email, accountType });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const res = NextResponse.json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        accountType: user.accountType,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
