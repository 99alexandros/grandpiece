// Validare pentru formularul de rezervări – folosită și în browser, și în API.

export interface ReservationInput {
  name: string;
  phone: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  guests: string;
  notes: string;
}

export type ReservationErrors = Partial<Record<keyof ReservationInput, string>>;

export const MAX_GUESTS = 12;

/** Intervalele orare în care se pot face rezervări (ultima oră e cu 1h înainte de închidere). */
export function timeSlotsForDate(date: string): string[] {
  const d = new Date(`${date}T12:00:00`);
  if (Number.isNaN(d.getTime())) return [];
  const day = d.getDay(); // 0 = duminică, 6 = sâmbătă
  const weekend = day === 0 || day === 6;
  // Luni–Vineri 12:00–23:00 (închidere 00:00); Sâmbătă–Duminică 14:00–01:00 (închidere 02:00)
  const slots: string[] = [];
  const start = weekend ? 14 : 12;
  const end = weekend ? 25 : 23; // 25 = 01:00 din ziua următoare
  for (let h = start; h <= end; h++) {
    for (const m of [0, 30]) {
      if (h === end && m === 30) continue;
      slots.push(`${String(h % 24).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return slots;
}

export function todayISO(): string {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export function validateReservation(input: ReservationInput): ReservationErrors {
  const errors: ReservationErrors = {};

  const name = input.name.trim();
  if (name.length < 2) errors.name = "Introduceți numele dumneavoastră.";
  else if (name.length > 80) errors.name = "Numele este prea lung.";

  const phone = input.phone.replace(/[\s().-]/g, "");
  if (!/^(\+|00)?\d{9,14}$/.test(phone)) {
    errors.phone = "Introduceți un număr de telefon valid.";
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date)) {
    errors.date = "Alegeți data rezervării.";
  } else if (input.date < todayISO()) {
    errors.date = "Data nu poate fi în trecut.";
  }

  if (!input.time) {
    errors.time = "Alegeți ora.";
  } else if (!errors.date && !timeSlotsForDate(input.date).includes(input.time)) {
    errors.time = "Ora aleasă este în afara programului.";
  }

  const guests = Number(input.guests);
  if (!Number.isInteger(guests) || guests < 1) {
    errors.guests = "Alegeți numărul de persoane.";
  } else if (guests > MAX_GUESTS) {
    errors.guests = `Pentru grupuri de peste ${MAX_GUESTS} persoane, vă rugăm să ne sunați.`;
  }

  if (input.notes.length > 500) errors.notes = "Mesajul este prea lung (maxim 500 de caractere).";

  return errors;
}
