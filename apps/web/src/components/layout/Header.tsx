"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { LogoIcon } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel py-3 shadow-lg" : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/#inicio" className="group flex items-center gap-3">
          <LogoIcon size={40} className="transition-transform duration-300 group-hover:scale-105" />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-xs font-bold leading-tight text-lumeria-white md:text-sm">
              {BRAND.name}
            </p>
            <p className="text-[10px] tracking-wide text-lumeria-gray md:text-xs">
              {BRAND.tagline}
            </p>
          </div>
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
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menu"
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-lumeria-sage transition-all",
              menuOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-lumeria-sage transition-all",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-lumeria-sage transition-all",
              menuOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="glass-panel mx-4 mt-3 flex flex-col gap-4 rounded-2xl p-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lumeria-sage"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contato" size="sm">
            Fale conosco
          </Button>
        </nav>
      )}
    </header>
  );
}
