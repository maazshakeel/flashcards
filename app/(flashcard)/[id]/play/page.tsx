import Play from "@/components/play-flashcard";

async function getFlashCards(id: string) {
  const res = await fetch(`/api/deck/${id}`, {
    headers: { "content-type": "application/json" },
  });
  return res.json();
}
export default async function Page({ params }: any) {
  const cards = await getFlashCards(params.id);
  const flashcards = cards.data[0].flashcards;

  return (
    <div>
      <div>
        <Play flashcards={flashcards} deckName={cards.data[0].deckName} />
      </div>
    </div>
  );
}
