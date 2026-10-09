import Link from "next/link";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/tarot", label: "Tarot Açılımları" },
  { href: "/melek", label: "Melek Kartları" },
  { href: "/katina", label: "Katina Açılımı" },
  { href: "/tarot-nedir", label: "Tarot Nedir?" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bronze-400/40 bg-parchment-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-3xl font-semibold tracking-[0.2em] text-bronze-700">
            tarotbacilar
          </span>
          <span className="mt-1 text-xs uppercase tracking-[0.3em] text-sepia">
            Tarot · Melek · Katina
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base tracking-wide text-ink transition-colors hover:text-bronze-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}