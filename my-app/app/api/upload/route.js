import { NextResponse } from "next/server";
import cloudinary from "../../../lib/cloudinary"; 

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file"); // blob

    const buffer = Buffer.from(await file.arrayBuffer());

    const res = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ folder: "items" }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }).end(buffer);
    });

    return NextResponse.json({ url: res.secure_url });
  } catch (err) {
    console.error("Cloudinary upload failed:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
