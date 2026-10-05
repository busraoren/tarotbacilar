import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const cards = await prisma.card.findMany({
    where: { deck: "TAROT" },
    orderBy: { number: "asc" },
  });

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-center text-4xl font-semibold text-gold-300 sm:text-5xl">
        Tarot Falı
      </h1>
      <p className="mt-4 text-center text-mist/80">
        Kartlarını seç, anlamlarını keşfet.
      </p>

      <ul className="mt-12 grid gap-6">
        {cards.map((card) => (
          <li
            key={card.id}
            className="rounded-xl border border-gold-500/30 bg-night-800/60 p-6"
          >
            <h2 className="text-2xl text-gold-400">{card.name}</h2>
            <p className="mt-1 text-sm text-violet-glow">
              {card.keywords.join(" · ")}
            </p>
            <p className="mt-3">{card.meaningGeneral}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}