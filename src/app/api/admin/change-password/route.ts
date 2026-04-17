import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { getAuthenticatedAdmin } from "@/lib/server/adminAuth";
import { findAdminById, updateAdminPassword } from "@/lib/server/db";

export async function POST(req: NextRequest) {
  const admin = await getAuthenticatedAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { currentPassword, newPassword } = await req.json();

  if (!currentPassword || !newPassword) {
    return NextResponse.json({ error: "Both passwords are required" }, { status: 400 });
  }

  if (newPassword.length < 8) {
    return NextResponse.json({ error: "New password must be at least 8 characters" }, { status: 400 });
  }

  const fullAdmin = await findAdminById(admin.id);
  if (!fullAdmin) {
    return NextResponse.json({ error: "Admin not found" }, { status: 404 });
  }

  const valid = await bcryptjs.compare(currentPassword, fullAdmin.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: "Current password is incorrect" }, { status: 401 });
  }

  const newHash = await bcryptjs.hash(newPassword, 12);
  await updateAdminPassword(admin.id, newHash);

  return NextResponse.json({ success: true });
}
