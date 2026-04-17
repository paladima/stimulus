import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedAdmin } from "@/lib/server/adminAuth";
import { getAllLeads } from "@/lib/server/db";

function escapeCsv(val: string | null | undefined): string {
  if (val == null) return "";
  const str = String(val);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET(req: NextRequest) {
  const admin = await getAuthenticatedAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || undefined;
  const source = searchParams.get("source") || undefined;
  const search = searchParams.get("search") || undefined;

  const rows = await getAllLeads({ status, source, search });

  const headers = [
    "ID", "Created At", "Source", "Name", "Email", "Phone",
    "Telegram", "WhatsApp", "Company", "Message", "Interest Type",
    "Page URL", "UTM Source", "UTM Medium", "UTM Campaign", "Status", "Notes",
  ];

  const csvRows = [headers.join(",")];

  for (const r of rows) {
    csvRows.push([
      r.id,
      r.createdAt ? new Date(r.createdAt).toISOString() : "",
      escapeCsv(r.source),
      escapeCsv(r.name),
      escapeCsv(r.email),
      escapeCsv(r.phone),
      escapeCsv(r.telegram),
      escapeCsv(r.whatsapp),
      escapeCsv(r.company),
      escapeCsv(r.message),
      escapeCsv(r.interestType),
      escapeCsv(r.pageUrl),
      escapeCsv(r.utmSource),
      escapeCsv(r.utmMedium),
      escapeCsv(r.utmCampaign),
      escapeCsv(r.status),
      escapeCsv(r.notes),
    ].join(","));
  }

  const csv = csvRows.join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
