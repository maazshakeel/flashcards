import FlashCard from "@/components/flashcard";
import Link from "next/link";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getDecks() {
  const res = await fetch("http://localhost:3002/api/deck", {});
  return res.json();
}

export default async function FlashCards() {
  const decks = await getDecks();
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {decks.data.map((deck: any) => (
        <Link href="/" key={deck.id}>
          <FlashCard
            title={deck.deckName}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque! Itaque commodi neque nam temporibus."
          />
        </Link>
      ))}
    </div>
  );
}
