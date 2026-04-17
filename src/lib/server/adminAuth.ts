import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { findAdminById } from "./db";

const ADMIN_COOKIE = "admin_token";
const SECRET = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET || process.env.JWT_SECRET || "stimulus-admin-secret-key-change-me");

export async function signAdminToken(adminId: number): Promise<string> {
  return new SignJWT({ adminId })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(SECRET);
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as { adminId: number };
  } catch {
    return null;
  }
}

export async function getAuthenticatedAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) return null;

  const payload = await verifyAdminToken(token);
  if (!payload) return null;

  const admin = await findAdminById(payload.adminId);
  if (!admin) return null;

  return { id: admin.id, email: admin.email, name: admin.name };
}

export function getAdminCookieName() {
  return ADMIN_COOKIE;
}
