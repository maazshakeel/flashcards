"use client";

import FlashCardInput from "@/components/flashcard-input";
import SaveButton from "@/components/save-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TFlashcard } from "@/types/flash-card.types";
import { Plus, PlusSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type CreateDeckProps = {};

export default function CreateDeck({}: CreateDeckProps) {
  const [deckName, setDeckName] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);

  const [flashcards, setFlashcards] = useState<TFlashcard[]>([
    { id: 1, question: "", answer: "" }, // Initial flashcard
    { id: 2, question: "", answer: "" }, // Initial flashcard
  ]);

  const handleFlashcardChange = (
    index: number,
    field: "question" | "answer",
    value: string,
  ) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index][field] = value;
    setFlashcards(updatedFlashcards);
  };

  const addFlashcard = () => {
    setFlashcards([
      ...flashcards,
      { id: flashcards.length + 1, question: "", answer: "" },
    ]);
  };

  const deleteFlashcard = (id: number) => {
    const updatedFlashcards = flashcards.filter((card) => card.id !== id);
    setFlashcards(updatedFlashcards);
  };

  return (
    <div className="p-14 flex flex-col gap-6">
      <div>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-wide lg:text-4xl">
          Create Deck
        </h1>
        <Input
          type="text"
          placeholder="e.x: vocabulary"
          className="lg:max-w-lg p-5 py-6 text-md mt-5 w-full shadow-sm"
          value={deckName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDeckName(e.target.value)
          }
        />
      </div>
      <div>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-wide lg:text-4xl">
          Create Flashcards
        </h1>
        <div className="mt-5">
          {flashcards.map((flashcard, index) => (
            <FlashCardInput
              key={flashcard.id}
              id={flashcard.id}
              question={flashcard.question}
              answer={flashcard.answer}
              setQuestion={(value: string) =>
                handleFlashcardChange(index, "question", value)
              }
              setAnswer={(value: string) =>
                handleFlashcardChange(index, "answer", value)
              }
              onDelete={deleteFlashcard}
            />
          ))}
          {flashcards.length === 0 && (
            <p className="text-xl text-muted-foreground">
              No flashcard yet been added!
            </p>
          )}
          <Button
            variant={"outline"}
            className="transition-all border-dashed sm:py-12 sm:px-16 py-10 px-10 lg:max-w-4xl w-full shadow-sm flex gap-2 mt-5"
            onClick={addFlashcard}
          >
            <PlusSquare size={25} />
            <p className="scroll-m-20 text-lg font-medium tracking-tight">
              Add a new card
            </p>
          </Button>
        </div>

        <div className="lg:max-w-4xl w-full flex justify-end gap-2 mt-5">
          <Link href="..">
            <Button variant="outline" className="px-10 py-6">
              Cancel
            </Button>
          </Link>
          {/* <Button disabled={flashcards.length === 0} className="px-10 py-6">
            Save
          </Button> */}
          <SaveButton
            disabled={flashcards.length === 0}
            deckName={deckName}
            flashcards={flashcards}
            setDeckName={setDeckName}
          />
        </div>
      </div>
    </div>
  );
}
