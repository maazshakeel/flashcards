import FlashCard from "@/components/flashcard";
import Link from "next/link";

async function getDecks() {
  const res = await fetch("https://letflash.vercel.app/api/deck/", {
    headers: { "content-type": "application/json" },
  });
  return res.json();
}

export default async function FlashCards() {
  const decks = await getDecks();
  console.log("------Decks");
  console.log(decks);
  console.log("Decks-----------");

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {decks.data.map((deck: any) => (
        <Link href="/" key={deck.id}>
          <FlashCard title={deck.deckName} description="No description." />
        </Link>
      ))}
    </div>
  );
}
