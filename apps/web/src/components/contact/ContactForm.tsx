"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm({ className }: { className?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "Erro ao enviar mensagem.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Erro ao enviar mensagem.",
      );
    }
  }

  if (state === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl glass-panel p-8 text-center",
          className,
        )}
      >
        <p className="text-4xl">✓</p>
        <h3 className="mt-4 text-xl font-bold text-lumeria-sage">
          Mensagem enviada!
        </h3>
        <p className="mt-2 text-lumeria-gray">
          Retornaremos em breve. Obrigado pelo contato.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setState("idle")}
        >
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-6 rounded-2xl glass-panel p-8", className)}
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-lumeria-sage">
          Nome *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={state === "loading"}
          className="w-full rounded-xl border border-lumeria-sage/20 bg-lumeria-forest/50 px-4 py-3 text-lumeria-white placeholder:text-lumeria-gray focus:border-lumeria-sage/50 focus:outline-none disabled:opacity-50"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-lumeria-sage">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={state === "loading"}
          className="w-full rounded-xl border border-lumeria-sage/20 bg-lumeria-forest/50 px-4 py-3 text-lumeria-white placeholder:text-lumeria-gray focus:border-lumeria-sage/50 focus:outline-none disabled:opacity-50"
          placeholder="seu@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm text-lumeria-sage">
          Telefone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          disabled={state === "loading"}
          className="w-full rounded-xl border border-lumeria-sage/20 bg-lumeria-forest/50 px-4 py-3 text-lumeria-white placeholder:text-lumeria-gray focus:border-lumeria-sage/50 focus:outline-none disabled:opacity-50"
          placeholder="(48) 99999-9999"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-lumeria-sage">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={state === "loading"}
          className="w-full resize-none rounded-xl border border-lumeria-sage/20 bg-lumeria-forest/50 px-4 py-3 text-lumeria-white placeholder:text-lumeria-gray focus:border-lumeria-sage/50 focus:outline-none disabled:opacity-50"
          placeholder="Conte-nos sobre seu projeto..."
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={state === "loading"}
      >
        {state === "loading" ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}
