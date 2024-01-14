import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Your function logic here
  return NextResponse.json({ name: "File uploaded" });
}
