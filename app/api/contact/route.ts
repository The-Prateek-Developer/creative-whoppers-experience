import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import {
  contactSubmissionSchema,
  formatContactZodErrors,
} from "@/lib/contact-schema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please fix the highlighted fields.",
        errors: formatContactZodErrors(parsed.error),
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  try {
    const submission = await prisma.contactSubmission.create({
      data: {
        name: data.name,
        company: data.company,
        email: data.email.toLowerCase(),
        phone: data.phone,
        service: data.service,
        message: data.message,
        status: "new",
      },
    });

    return NextResponse.json({
      ok: true,
      id: submission.id,
      message: "Thanks — your brief was received. We'll be in touch shortly.",
    });
  } catch (error) {
    console.error("contact submission failed", error);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    );
  }
}
