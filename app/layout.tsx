import type { Metadata } from "next";
import { Be_Vietnam_Pro, Gabarito } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const gabarito = Gabarito({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE_CONFIG.lang} className="scroll-pt-16 scroll-smooth">
      <body
        className={`${beVietnamPro.variable} ${gabarito.variable} bg-black font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
