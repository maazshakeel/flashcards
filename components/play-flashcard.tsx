"use client";

import { useState } from "react";

type Flashcard = {
  id: number;
  question: string;
  answer: string;
};

type PlayProps = {
  flashcards: Flashcard[];
};

export default function Play({ flashcards }: PlayProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold mb-4">Flashcard Play</h1>

      {flashcards.length === 0 ? (
        <p>No flashcards available.</p>
      ) : (
        <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md mx-auto">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              Card {currentCardIndex + 1}
            </h2>
            {!showAnswer ? (
              <p className="text-lg">{flashcards[currentCardIndex].question}</p>
            ) : (
              <p className="text-lg">{flashcards[currentCardIndex].answer}</p>
            )}
          </div>
          <div className="flex justify-between p-4">
            <button
              onClick={handleShowAnswer}
              className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
            >
              Show Answer
            </button>
            <button
              onClick={handleNextCard}
              className="bg-green-500 text-white py-2 px-4 rounded focus:outline-none"
            >
              Next Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
