import { Flashcard } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type FlashCardProps = {
  title: string;
  description: string;
  id: string;
};

export type TFlashcard = {
  id: number;
  question: string;
  answer: string;
};
export type CreateDeckRequestBody = {
  deckName: string;
  flashcards: TFlashcard[];
};

export type FlashCardInput = {
  id: number;
  answer: string;
  question: string;
  setQuestion: (value: string) => void;
  setAnswer: (value: string) => void;
  onDelete: (id: number) => void;
};
