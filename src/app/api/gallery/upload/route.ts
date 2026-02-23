import { NextRequest, NextResponse } from "next/server";
import { storageBucket, isFirebaseEnabled } from "@/lib/firebase-admin";

const MAX_SIZE_MB = 10;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export async function POST(request: NextRequest) {
  if (!isFirebaseEnabled || !storageBucket) {
    return NextResponse.json(
      { error: "Upload is not configured. Enable Firebase and Storage." },
      { status: 503 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid form data." },
      { status: 400 }
    );
  }

  const file = formData.get("file") as File | null;
  if (!file || !(file instanceof File)) {
    return NextResponse.json(
      { error: "No image file provided." },
      { status: 400 }
    );
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Invalid file type. Use JPEG, PNG, WebP, or GIF." },
      { status: 400 }
    );
  }

  const maxBytes = MAX_SIZE_MB * 1024 * 1024;
  if (file.size > maxBytes) {
    return NextResponse.json(
      { error: `File too large. Maximum size is ${MAX_SIZE_MB} MB.` },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${ext}`;
  const path = `gallery/${safeName}`;

  try {
    const storageFile = storageBucket.file(path);
    await storageFile.save(buffer, {
      metadata: {
        contentType: file.type,
      },
    });
    await storageFile.makePublic();

    const bucketName = storageBucket.name;
    const imageUrl = `https://storage.googleapis.com/${bucketName}/${path}`;

    return NextResponse.json({ imageUrl });
  } catch (err) {
    console.error("Gallery upload error:", err);
    return NextResponse.json(
      { error: "Failed to upload image. Try again." },
      { status: 500 }
    );
  }
}
