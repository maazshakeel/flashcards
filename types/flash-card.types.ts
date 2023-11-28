import { Flashcard } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type FlashCardProps = {
  title: string;
  description: string;
};

export type CreateDeckRequestBody = {
  deckName: string;
  flashcards: Flashcard[];
};

export type FlashCardInput = {
  id: number;
  setQuestion: Dispatch<SetStateAction<string>>;
  setAnswer: Dispatch<SetStateAction<string>>;
  answer: string;
  question: string;
};
