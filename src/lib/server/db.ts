import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { leads, adminUsers, type InsertLead } from "./schema";
import { eq, desc, like, or, sql, and } from "drizzle-orm";

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL!,
  waitForConnections: true,
  connectionLimit: 10,
});

export const db = drizzle(pool);

// ─── Lead helpers ───────────────────────────────────────────

export async function saveLead(data: Omit<InsertLead, "id" | "createdAt">) {
  const [result] = await db.insert(leads).values(data);
  return result.insertId;
}

export async function getLeads({
  page = 1,
  limit = 25,
  status,
  source,
  search,
}: {
  page?: number;
  limit?: number;
  status?: string;
  source?: string;
  search?: string;
}) {
  const conditions = [];
  if (status && status !== "all") {
    conditions.push(eq(leads.status, status as any));
  }
  if (source && source !== "all") {
    conditions.push(eq(leads.source, source));
  }
  if (search) {
    conditions.push(
      or(
        like(leads.name, `%${search}%`),
        like(leads.email, `%${search}%`),
        like(leads.company, `%${search}%`),
        like(leads.phone, `%${search}%`),
        like(leads.telegram, `%${search}%`),
      )!,
    );
  }

  const where = conditions.length > 0 ? and(...conditions) : undefined;

  const [rows, countResult] = await Promise.all([
    db
      .select()
      .from(leads)
      .where(where)
      .orderBy(desc(leads.createdAt))
      .limit(limit)
      .offset((page - 1) * limit),
    db
      .select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(where),
  ]);

  return { leads: rows, total: Number(countResult[0].count) };
}

export async function updateLeadStatus(id: number, status: string) {
  await db.update(leads).set({ status: status as any }).where(eq(leads.id, id));
}

export async function updateLeadNotes(id: number, notes: string) {
  await db.update(leads).set({ notes }).where(eq(leads.id, id));
}

export async function getAllLeads(filters?: { status?: string; source?: string; search?: string }) {
  const conditions = [];
  if (filters?.status && filters.status !== "all") {
    conditions.push(eq(leads.status, filters.status as any));
  }
  if (filters?.source && filters.source !== "all") {
    conditions.push(eq(leads.source, filters.source));
  }
  if (filters?.search) {
    conditions.push(
      or(
        like(leads.name, `%${filters.search}%`),
        like(leads.email, `%${filters.search}%`),
        like(leads.company, `%${filters.search}%`),
      )!,
    );
  }
  const where = conditions.length > 0 ? and(...conditions) : undefined;
  return db.select().from(leads).where(where).orderBy(desc(leads.createdAt));
}

// ─── Admin helpers ──────────────────────────────────────────

export async function findAdminByEmail(email: string) {
  const rows = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
  return rows[0] || null;
}

export async function findAdminById(id: number) {
  const rows = await db.select().from(adminUsers).where(eq(adminUsers.id, id)).limit(1);
  return rows[0] || null;
}

export async function updateAdminPassword(id: number, passwordHash: string) {
  await db.update(adminUsers).set({ passwordHash }).where(eq(adminUsers.id, id));
}
