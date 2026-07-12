"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { LogoWordmark } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body e permite fechar com Esc enquanto o menu está aberto
  useEffect(() => {
    if (!menuOpen) return;

    document.body.classList.add("menu-open");

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "safe-top fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel py-3 shadow-lg" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/#inicio"
          className="group flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <LogoWordmark className="transition-transform duration-300 group-hover:scale-[1.02]" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-lumeria-sage/80 transition-colors hover:text-lumeria-sage"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contato" size="sm">
            Fale conosco
          </Button>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 touch-manipulation flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-lumeria-sage transition-all duration-300",
              menuOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-lumeria-sage transition-all duration-300",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-lumeria-sage transition-all duration-300",
              menuOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-0 -z-10 bg-lumeria-forest/70 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              key="menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="safe-bottom glass-panel mx-4 mt-3 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="touch-manipulation rounded-xl px-3 py-3 text-lumeria-sage active:bg-lumeria-sage/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contato" size="sm" className="mt-2 w-full">
                Fale conosco
              </Button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
