import { Flashcard } from "@prisma/client";

export type FlashCardProps = {
  title: string;
  description: string;
};

export type CreateDeckRequestBody = {
  deckName: string;
  flashcards: Flashcard[];
};
