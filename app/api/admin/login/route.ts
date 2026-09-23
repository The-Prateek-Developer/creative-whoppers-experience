import { NextResponse } from "next/server";
import { z } from "zod";
import {
  ADMIN_SESSION_COOKIE,
  adminCookieOptions,
  createAdminSessionToken,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

const loginSchema = z.object({
  username: z.string().trim().min(1, "Enter your username."),
  password: z.string().min(1, "Enter your password."),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid credentials." },
      { status: 400 }
    );
  }

  try {
    const { username, password } = parsed.data;
    const valid = await verifyAdminPassword(username, password);
    if (!valid) {
      return NextResponse.json(
        { ok: false, message: "Invalid username or password." },
        { status: 401 }
      );
    }

    const token = await createAdminSessionToken(username);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(ADMIN_SESSION_COOKIE, token, adminCookieOptions());
    return response;
  } catch (error) {
    console.error("admin login failed", error);
    const message =
      error instanceof Error && /ADMIN_|must be set/i.test(error.message)
        ? "Admin login is not configured on this server. Add ADMIN_USERNAME, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET in Vercel Environment Variables, then redeploy."
        : "Unable to sign in right now. Please try again.";
    return NextResponse.json({ ok: false, message }, { status: 503 });
  }
}
