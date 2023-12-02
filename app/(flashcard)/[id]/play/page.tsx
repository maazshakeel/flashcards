import Play from "@/components/play-flashcard";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import getConfig from "next/config";
import { redirect } from "next/navigation";

const { publicRuntimeConfig } = getConfig();

async function getFlashCards(id: string) {
  const res = await fetch(`http://localhost:3000/api/deck/${id}`, {
    headers: { "content-type": "application/json" },
  });
  return res.json();
}
export default async function Page({ params }: any) {
  const cards = await getFlashCards(params.id);
  const flashcards = cards.data[0].flashcards;
  console.log(cards.data[0].deckName);

  const session = await getServerSession();

  if (!session || !session.user) redirect("/login");

  return (
    <div>
      <div>
        <Play flashcards={flashcards} deckName={cards.data[0].deckName} />
      </div>
    </div>
  );
}
