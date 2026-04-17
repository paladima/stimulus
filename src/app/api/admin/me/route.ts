import { NextResponse } from "next/server";
import { getAuthenticatedAdmin } from "@/lib/server/adminAuth";

export async function GET() {
  const admin = await getAuthenticatedAdmin();
  if (!admin) {
    return NextResponse.json({ admin: null });
  }
  return NextResponse.json({ admin });
}
