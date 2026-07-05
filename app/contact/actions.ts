"use server";

import { site } from "@/data/site";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

function getField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContact(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  void previousState;

  const website = getField(formData, "website");
  if (website) return { status: "success", message: "Gracias. Tu mensaje fue enviado." };

  const firstName = getField(formData, "firstName");
  const lastName = getField(formData, "lastName");
  const email = getField(formData, "email");
  const company = getField(formData, "company");
  const phone = getField(formData, "phone");
  const description = getField(formData, "description");

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const invalid =
    firstName.length < 2 ||
    firstName.length > 80 ||
    lastName.length < 2 ||
    lastName.length > 80 ||
    !validEmail ||
    email.length > 254 ||
    company.length > 120 ||
    phone.length > 40 ||
    description.length < 20 ||
    description.length > 3000;

  if (invalid) {
    return {
      status: "error",
      message: "Revisa los campos e incluye una descripción de al menos 20 caracteres.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: `El formulario aún no está conectado. Escríbeme a ${site.email}.`,
    };
  }

  const safeName = `${firstName} ${lastName}`.replace(/[\r\n]+/g, " ");
  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "vladimir-portfolio/1.0",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portafolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_EMAIL ?? site.email],
        reply_to: email,
        subject: `Nuevo contacto del portafolio: ${safeName}`,
        text: [
          `Nombre: ${safeName}`,
          `Email: ${email}`,
          `Compañía: ${company || "No indicada"}`,
          `Teléfono: ${phone || "No indicado"}`,
          "",
          "Descripción:",
          description,
        ].join("\n"),
      }),
      cache: "no-store",
    });
  } catch {
    return {
      status: "error",
      message: "No pude conectar con el servicio de correo. Intenta nuevamente.",
    };
  }

  if (!response.ok) {
    return {
      status: "error",
      message: "No pude enviar el mensaje. Intenta nuevamente o escríbeme por WhatsApp.",
    };
  }

  return {
    status: "success",
    message: "Gracias. Recibí tu mensaje y te responderé pronto.",
  };
}
