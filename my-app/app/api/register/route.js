import connectDB  from "../../../lib/mongodb.js";
import User from "../../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      college,
      phone,
      password,
      confirmPassword,
      acceptTerms,
      accountType,
    } = await req.json();

    await connectDB();

    if (!acceptTerms) {
      return new Response(JSON.stringify({ message: "You must accept terms" }), { status: 400 });
    }
    if (password !== confirmPassword) {
      return new Response(JSON.stringify({ message: "Passwords do not match" }), { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "Email already registered" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      college,
      phone,
      password: hashedPassword,
      accountType,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const res = NextResponse.json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        accountType: newUser.accountType,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      },
    }, { status: 201 });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return res;

  } catch (err) {
    console.error("❌ Error in register API:", err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
