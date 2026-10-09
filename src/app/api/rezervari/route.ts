import { NextResponse } from "next/server";
import { validateReservation, type ReservationInput } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Cerere invalidă." }, { status: 400 });
  }

  const b = (body ?? {}) as Record<string, unknown>;
  const input: ReservationInput = {
    name: String(b.name ?? ""),
    phone: String(b.phone ?? ""),
    date: String(b.date ?? ""),
    time: String(b.time ?? ""),
    guests: String(b.guests ?? ""),
    notes: String(b.notes ?? ""),
  };

  const errors = validateReservation(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, message: "Date invalide.", errors }, { status: 422 });
  }

  // TODO: aici se poate trimite un e-mail / salva în baza de date. Deocamdată doar se loghează.
  console.log("[REZERVARE NOUĂ]", { ...input, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true, message: "Rezervarea a fost înregistrată." });
}
