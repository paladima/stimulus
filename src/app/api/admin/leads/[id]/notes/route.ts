import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedAdmin } from "@/lib/server/adminAuth";
import { updateLeadNotes } from "@/lib/server/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const admin = await getAuthenticatedAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { notes } = await req.json();
  await updateLeadNotes(parseInt(params.id), notes || "");
  return NextResponse.json({ success: true });
}
