import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { submissionStatusSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const q = searchParams.get("q")?.trim() ?? "";

  const where = {
    ...(status && status !== "all"
      ? { status }
      : {}),
    ...(q
      ? {
          OR: [
            { name: { contains: q } },
            { email: { contains: q } },
            { company: { contains: q } },
            { service: { contains: q } },
            { phone: { contains: q } },
          ],
        }
      : {}),
  };

  const [submissions, total, newCount, reviewedCount, archivedCount] =
    await Promise.all([
      prisma.contactSubmission.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: 200,
      }),
      prisma.contactSubmission.count(),
      prisma.contactSubmission.count({ where: { status: "new" } }),
      prisma.contactSubmission.count({ where: { status: "reviewed" } }),
      prisma.contactSubmission.count({ where: { status: "archived" } }),
    ]);

  return NextResponse.json({
    ok: true,
    stats: {
      total,
      new: newCount,
      reviewed: reviewedCount,
      archived: archivedCount,
    },
    submissions,
  });
}

export async function PATCH(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const id = typeof (body as { id?: unknown })?.id === "string" ? (body as { id: string }).id : "";
  const statusRaw = (body as { status?: unknown })?.status;
  const statusParsed = submissionStatusSchema.safeParse(statusRaw);

  if (!id || !statusParsed.success) {
    return NextResponse.json(
      { ok: false, message: "Provide a valid submission id and status." },
      { status: 400 }
    );
  }

  try {
    const updated = await prisma.contactSubmission.update({
      where: { id },
      data: { status: statusParsed.data },
    });
    return NextResponse.json({ ok: true, submission: updated });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Submission not found." },
      { status: 404 }
    );
  }
}
