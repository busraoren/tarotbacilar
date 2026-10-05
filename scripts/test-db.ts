import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  const count = await prisma.card.count();
  console.log(`Bağlantı başarılı. Veritabanındaki kart sayısı: ${count}`);
}

main()
  .catch((err) => {
    console.error("Bağlantı hatası:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());