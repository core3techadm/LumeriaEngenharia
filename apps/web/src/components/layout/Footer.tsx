import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { LogoWordmark } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-lumeria-sage/10 bg-lumeria-forest">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 md:gap-12 md:py-16">
        <div>
          <div className="mb-4">
            <Link href="/#inicio" className="inline-block">
              <LogoWordmark
                className="h-16 w-auto sm:h-[4.75rem]"
                priority={false}
              />
            </Link>
            <p className="mt-3 text-xs text-lumeria-gray">{BRAND.tagline}</p>
          </div>
          <p className="text-sm leading-relaxed text-lumeria-gray">
            {BRAND.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-lumeria-sage">
            NAVEGAÇÃO
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-lumeria-gray transition-colors hover:text-lumeria-sage"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-lumeria-sage">
            CONTATO
          </h3>
          <ul className="space-y-2 text-sm text-lumeria-gray">
            <li>{BRAND.email}</li>
            <li>{BRAND.phone}</li>
            <li>{BRAND.city}</li>
          </ul>
        </div>
      </div>

      <div className="safe-bottom border-t border-lumeria-sage/10 px-4 py-6 text-center text-xs text-lumeria-gray sm:px-6">
        © {new Date().getFullYear()} {BRAND.name}. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
