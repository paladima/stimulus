import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedAdmin } from "@/lib/server/adminAuth";
import { getLeads } from "@/lib/server/db";

export async function GET(req: NextRequest) {
  const admin = await getAuthenticatedAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "25");
  const status = searchParams.get("status") || undefined;
  const source = searchParams.get("source") || undefined;
  const search = searchParams.get("search") || undefined;

  const result = await getLeads({ page, limit, status, source, search });

  return NextResponse.json({ success: true, ...result });
}
