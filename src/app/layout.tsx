import type { Metadata } from "next";
import { Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "tarotbacilar - Ücretsiz Online Tarot, Melek ve Katina Kartları",
    template: "%s | Tarotbacılar",
  },
  description:
    "Ücretsiz online tarot, melek ve katina kartı falı. Tek kart, 3 kart, Kelt Haçı ve daha fazla açılımla aşk, kariyer ve genel konularda kartlarını aç.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-cormorant)] text-lg">
            <Header />
        {children}
      </body>
    </html>
  );
}