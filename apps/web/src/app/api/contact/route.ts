import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BRAND } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 },
      );
    }

    if (!resend) {
      console.error("[contact] RESEND_API_KEY não configurada");
      return NextResponse.json(
        {
          error:
            "Serviço de e-mail não configurado. Entre em contato diretamente.",
        },
        { status: 503 },
      );
    }

    const to = process.env.CONTACT_EMAIL ?? BRAND.email;
    const from =
      process.env.RESEND_FROM_EMAIL ?? "Lumeria Contato <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Lumeria] Novo contato de ${name}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ""}
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Falha ao enviar e-mail. Tente novamente." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 },
    );
  }
}
