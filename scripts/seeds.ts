import "dotenv/config";
import { prisma } from "../src/lib/prisma";

const cards = [
  {
    deck: "TAROT" as const,
    slug: "deli",
    name: "Deli",
    number: 0,
    suit: "Büyük Arkana",
    keywords: ["yeni başlangıç", "özgürlük", "cesaret"],
    meaningGeneral:
      "Deli kartı yeni bir yolculuğun başlangıcını simgeler. Bilinmeyene atılan cesur bir adımı ve saf bir güveni anlatır.",
    meaningLove:
      "Aşkta yeni bir başlangıç ya da önyargısız bir açılış vardır. Kalbini açmaya cesaret edersen sürprizlere hazır ol.",
    meaningCareer:
      "Kariyerde yeni bir fırsat ya da yön değişikliği kapıda. Risk almadan önce sağlam bir plan yapmak sana iyi gelir.",
  },
  {
    deck: "TAROT" as const,
    slug: "buyucu",
    name: "Büyücü",
    number: 1,
    suit: "Büyük Arkana",
    keywords: ["irade", "yaratıcılık", "beceri"],
    meaningGeneral:
      "Büyücü, elindeki tüm araçlarla hedefini gerçeğe dönüştürebileceğini söyler. Odaklanma ve irade gücü ön plandadır.",
    meaningLove:
      "İlişkide inisiyatif almanın zamanı. Duygularını net ifade etmek bağları güçlendirir.",
    meaningCareer:
      "Yeteneklerini sergileme ve projeleri hayata geçirme dönemi. Kendine güven kariyerinde kapı açar.",
  },
  {
    deck: "TAROT" as const,
    slug: "yuksek-rahibe",
    name: "Yüksek Rahibe",
    number: 2,
    suit: "Büyük Arkana",
    keywords: ["sezgi", "gizem", "içsel bilgelik"],
    meaningGeneral:
      "Yüksek Rahibe, cevapların dışarıda değil içeride olduğunu hatırlatır. Sezgilerine kulak vermeni ve sabırlı olmanı önerir.",
    meaningLove:
      "Aşkta söylenmeyenler ve gizli duygular var. Aceleci davranmak yerine sezgilerini dinle.",
    meaningCareer:
      "Kariyerde her şeyin cevabı henüz açık değil. Bilgi toplamak ve gözlem yapmak şu an en doğru hamle.",
  },
];

async function main() {
  for (const card of cards) {
    await prisma.card.upsert({
      where: { deck_slug: { deck: card.deck, slug: card.slug } },
      update: card,
      create: card,
    });
  }
  const count = await prisma.card.count();
  console.log(`Seed tamamlandı. Toplam kart sayısı: ${count}`);
}

main()
  .catch((err) => {
    console.error("Seed hatası:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());