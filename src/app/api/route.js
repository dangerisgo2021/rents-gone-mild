import { NextResponse } from "next/server.js";
import { connectToDatabase } from "../../database/database.js";

export async function GET() {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const result = await collection.insertOne({ env: process.env.NODE_ENV });
  return NextResponse.json({ inserted: result.insertedId });
}
