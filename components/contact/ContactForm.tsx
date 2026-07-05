"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContact, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClass =
  "w-full border-b border-line-strong bg-transparent py-3 font-display text-lg text-ink placeholder:text-faint focus:border-ink focus:outline-none";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="eyebrow">Nombre *</span>
          <input className={inputClass} name="firstName" autoComplete="given-name" required maxLength={80} />
        </label>

        <label className="grid gap-2">
          <span className="eyebrow">Apellido *</span>
          <input className={inputClass} name="lastName" autoComplete="family-name" required maxLength={80} />
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="eyebrow">Email *</span>
          <input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={254} />
        </label>

        <label className="grid gap-2">
          <span className="eyebrow">Teléfono</span>
          <input className={inputClass} name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="eyebrow">Compañía</span>
        <input className={inputClass} name="company" autoComplete="organization" maxLength={120} />
      </label>

      <label className="grid gap-2">
        <span className="eyebrow">Cuéntame sobre el proceso *</span>
        <textarea
          className={`${inputClass} min-h-40 resize-y leading-relaxed`}
          name="description"
          required
          minLength={20}
          maxLength={3000}
          placeholder="¿Qué hacen hoy manualmente y qué resultado buscas?"
        />
      </label>

      <label aria-hidden className="hidden">
        Sitio web
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="border border-ink bg-ink px-7 py-4 font-mono text-caption uppercase tracking-[0.14em] text-bg transition-colors hover:bg-transparent hover:text-ink disabled:cursor-wait disabled:opacity-60"
        >
          {pending ? "Enviando…" : "Enviar mensaje →"}
        </button>

        <p
          aria-live="polite"
          className={`text-small ${state.status === "error" ? "text-ink" : "text-ink-soft"}`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
