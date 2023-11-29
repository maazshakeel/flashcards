import FlashCard from "@/components/flashcard";
import { getDecks } from "@/utils/get-decks";
import Link from "next/link";

export default async function FlashCards() {
  const decks = await getDecks();
  console.log("------Decks");
  console.log(decks);
  console.log("Decks-----------");

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {decks.data.map((deck: any) => (
        <Link
          href={{ pathname: `/${deck.id}/play`, query: deck.flashcard }}
          key={deck.id}
        >
          <FlashCard
            title={deck.deckName}
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero unde, quibusdam aliquid magnam similique cum."
          />
        </Link>
      ))}
      {decks.data.length === 0 && (
        <p className="text-xl text-muted-foreground">
          No flashcard yet been added!
        </p>
      )}
    </div>
  );
}
