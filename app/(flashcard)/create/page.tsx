"use client";

import FlashCardInput from "@/components/flashcard-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TFlashcard } from "@/types/flash-card.types";
import { Plus, PlusSquare } from "lucide-react";
import { useState } from "react";

type CreateDeckProps = {};

export default function CreateDeck({}: CreateDeckProps) {
  const [answer, setAnswer] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const [flashcards, setFlashcards] = useState<TFlashcard[]>([
    { id: 1, question: "", answer: "" }, // Initial flashcard
    { id: 2, question: "", answer: "" }, // Initial flashcard
  ]);

  const handleFlashcardChange = (
    index: number,
    field: "question" | "answer",
    value: string
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
            />
          ))}
          {/* <FlashCardInput
            id={1}
            answer={answer}
            question={question}
            setQuestion={setQuestion}
            setAnswer={setAnswer}
          /> */}
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
      </div>
    </div>
  );
}