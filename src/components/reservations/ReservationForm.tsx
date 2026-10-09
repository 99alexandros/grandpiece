"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  MAX_GUESTS,
  timeSlotsForDate,
  todayISO,
  validateReservation,
  type ReservationErrors,
  type ReservationInput,
} from "@/lib/validation";
import { site } from "@/data/site";

const empty: ReservationInput = { name: "", phone: "", date: "", time: "", guests: "2", notes: "" };

const fieldCls =
  "w-full border bg-cream px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-brand";

function ErrorMsg({ errors, k }: { errors: ReservationErrors; k: keyof ReservationInput }) {
  if (!errors[k]) return null;
  return (
    <p id={`e-${k}`} role="alert" className="mt-1.5 text-sm text-wine">
      {errors[k]}
    </p>
  );
}

export default function ReservationForm() {
  const [values, setValues] = useState<ReservationInput>(empty);
  const [errors, setErrors] = useState<ReservationErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [confirmed, setConfirmed] = useState<ReservationInput | null>(null);

  const slots = useMemo(() => (values.date ? timeSlotsForDate(values.date) : []), [values.date]);

  function update<K extends keyof ReservationInput>(key: K, value: string) {
    setValues((v) => {
      const next = { ...v, [key]: value };
      if (key === "date" && !timeSlotsForDate(value).includes(v.time)) next.time = "";
      return next;
    });
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateReservation(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/rezervari", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setConfirmed(values);
        setStatus("success");
        setValues(empty);
      } else {
        if (data.errors) setErrors(data.errors);
        setServerMsg(data.message ?? "A apărut o eroare.");
        setStatus("error");
      }
    } catch {
      setServerMsg("Nu am putut trimite rezervarea. Încercați din nou sau sunați-ne.");
      setStatus("error");
    }
  }

  if (status === "success" && confirmed) {
    const dateLabel = new Date(`${confirmed.date}T12:00:00`).toLocaleDateString("ro-RO", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return (
      <div role="status" className="border border-brand bg-cream p-10 text-center sm:p-14">
        <p className="font-serif text-6xl text-brand" aria-hidden="true">✓</p>
        <h2 className="mt-4 font-serif text-4xl text-pine">Mulțumim, {confirmed.name.trim()}!</h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-ink/90">
          Am primit cererea dumneavoastră pentru {confirmed.guests}{" "}
          {Number(confirmed.guests) === 1 ? "persoană" : "persoane"}, {dateLabel}, la ora {confirmed.time}.
        </p>
        <p className="mx-auto mt-3 max-w-md text-ink/85">
          Vă vom contacta în scurt timp la numărul {confirmed.phone} pentru confirmare.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setConfirmed(null);
          }}
          className="mt-8 border border-pine px-8 py-3 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-pine transition-colors hover:bg-pine hover:text-bone"
        >
          Fă o altă rezervare
        </button>
      </div>
    );
  }

  const err = (k: keyof ReservationInput) => (errors[k] ? "border-wine" : "border-pine/30");
  const describe = (k: keyof ReservationInput) => (errors[k] ? `e-${k}` : undefined);
  const labelCls = "mb-2 block text-[0.75rem] font-medium uppercase tracking-[0.2em] text-pine";

  return (
    <form onSubmit={onSubmit} noValidate className="border border-brand/60 bg-cream p-6 sm:p-10" aria-label="Formular de rezervare">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className={labelCls}>Nume complet *</label>
          <input
            id="f-name" type="text" autoComplete="name" value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name} aria-describedby={describe("name")}
            className={`${fieldCls} ${err("name")}`} placeholder="Ion Popescu"
          />
          <ErrorMsg errors={errors} k="name" />
        </div>
        <div>
          <label htmlFor="f-phone" className={labelCls}>Telefon *</label>
          <input
            id="f-phone" type="tel" autoComplete="tel" value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone} aria-describedby={describe("phone")}
            className={`${fieldCls} ${err("phone")}`} placeholder="+40 7xx xxx xxx"
          />
          <ErrorMsg errors={errors} k="phone" />
        </div>
        <div>
          <label htmlFor="f-date" className={labelCls}>Data *</label>
          <input
            id="f-date" type="date" min={todayISO()} value={values.date}
            onChange={(e) => update("date", e.target.value)}
            aria-invalid={!!errors.date} aria-describedby={describe("date")}
            className={`${fieldCls} ${err("date")}`}
          />
          <ErrorMsg errors={errors} k="date" />
        </div>
        <div>
          <label htmlFor="f-time" className={labelCls}>Ora *</label>
          <select
            id="f-time" value={values.time} disabled={!values.date}
            onChange={(e) => update("time", e.target.value)}
            aria-invalid={!!errors.time} aria-describedby={describe("time")}
            className={`${fieldCls} ${err("time")} disabled:opacity-60`}
          >
            <option value="">{values.date ? "Alegeți ora" : "Alegeți întâi data"}</option>
            {slots.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ErrorMsg errors={errors} k="time" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="f-guests" className={labelCls}>Număr de persoane *</label>
          <select
            id="f-guests" value={values.guests}
            onChange={(e) => update("guests", e.target.value)}
            aria-invalid={!!errors.guests} aria-describedby={describe("guests")}
            className={`${fieldCls} ${err("guests")}`}
          >
            {Array.from({ length: MAX_GUESTS }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "persoană" : "persoane"}</option>
            ))}
          </select>
          <p className="mt-1.5 text-sm text-ink/75">
            Pentru grupuri mai mari de {MAX_GUESTS} persoane, sunați la {site.phone}.
          </p>
          <ErrorMsg errors={errors} k="guests" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="f-notes" className={labelCls}>Mențiuni (opțional)</label>
          <textarea
            id="f-notes" rows={4} value={values.notes} maxLength={500}
            onChange={(e) => update("notes", e.target.value)}
            aria-invalid={!!errors.notes} aria-describedby={describe("notes")}
            className={`${fieldCls} ${err("notes")}`}
            placeholder="Alergii, ocazie specială, preferințe pentru masă…"
          />
          <ErrorMsg errors={errors} k="notes" />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 border border-wine/40 bg-wine/5 px-4 py-3 text-wine">{serverMsg}</p>
      )}

      <button
        type="submit" disabled={status === "sending"}
        className="mt-8 w-full bg-pine px-8 py-4 text-[0.8rem] font-medium uppercase tracking-[0.25em] text-bone transition-colors hover:bg-pine-soft disabled:opacity-60"
      >
        {status === "sending" ? "Se trimite…" : "Trimite rezervarea"}
      </button>
      <p className="mt-4 text-center text-sm text-ink/75">* câmpuri obligatorii</p>
    </form>
  );
}
