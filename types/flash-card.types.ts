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
  answer: string;
  question: string;
  setQuestion: (value: string) => void;
  setAnswer: (value: string) => void;
};

export type TFlashcard = {
  id: number;
  question: string;
  answer: string;
};
