import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Lumeria Soluções",
    template: "%s | Lumeria Soluções",
  },
  description:
    "Inteligência, tecnologia e excelência para seu projeto — energia fotovoltaica, automação, sonorização, iluminação, projetos elétricos e gestão de obras.",
  keywords: [
    "energia solar",
    "fotovoltaica",
    "automação residencial",
    "sonorização",
    "iluminação",
    "projetos elétricos",
    "gestão de obras",
    "soluções",
  ],
  icons: {
    icon: "/logo/lumeria-icon.svg",
    apple: "/logo/lumeria-icon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Lumeria Soluções",
    description:
      "Inteligência, tecnologia e excelência para seu projeto — energia fotovoltaica, automação, sonorização, iluminação, projetos elétricos e gestão de obras.",
    type: "website",
    locale: "pt_BR",
    images: ["/logo/lumeria-wordmark.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1f14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
