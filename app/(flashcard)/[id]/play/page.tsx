import Play from "@/components/play-flashcard";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

async function getDecks(id: string) {
  const res = await fetch(`http://localhost:3000/api/deck/${id}`, {
    headers: { "content-type": "application/json" },
  });
  return res.json();
}
export default async function Page({ params }: any) {
  const flashcards = await getDecks(params.id);
  console.log("===============");
  console.log(flashcards.data[0].flashcards);
  console.log("===============");
  return (
    <div>
      <div>My Post: {params.id}</div>;<div></div>
    </div>
  );
}
