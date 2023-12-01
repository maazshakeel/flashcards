"use client";

// Import necessary dependencies
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define the Flashcard type
type Flashcard = {
  id: number;
  deckId: number;
  question: string;
  answer: string;
};

// Define the PlayProps type
type PlayProps = {
  flashcards: Flashcard[];
  deckName: string;
};

// Define the Play component
const Play: React.FC<PlayProps> = ({ flashcards, deckName }: PlayProps) => {
  // Set up state for the current card index and whether to show the answer
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Handle the click event to show the answer
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  // Handle the click event to move to the next card
  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  // Reset the current card index when the flashcards prop changes
  useEffect(() => {
    setCurrentCardIndex(0);
    setShowAnswer(false);
  }, [flashcards]);

  // Return the component JSX
  return (
    <div className="p-8 bg-background">
      <h1 className="text-3xl font-extrabold mb-4 text-primary text-center">
        {deckName}
      </h1>

      {flashcards.length === 0 ? (
        <p className="text-primary">No flashcards available.</p>
      ) : (
        <div>
          {/* Navbar to show all cards and highlight the active one */}
          <div className="w-full flex justify-center gap-2 mb-4">
            {flashcards.map((_, index) => (
              <div
                key={index}
                className={`h-8 w-8 rounded-full bg-accent cursor-pointer ${
                  currentCardIndex === index ? "bg-primary" : ""
                }`}
                onClick={() => setCurrentCardIndex(index)}
              />
            ))}
          </div>

          <Card className="max-w-sm bg-card rounded-lg overflow-hidden shadow-md mx-auto">
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-2 text-primary">
                Card {currentCardIndex + 1}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-primary">
                {showAnswer
                  ? flashcards[currentCardIndex].answer
                  : flashcards[currentCardIndex].question}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <Button
                onClick={handleShowAnswer}
                variant="outline"
                className="bg-accent text-accent-foreground py-2 px-4 rounded focus:outline-none"
              >
                Show Answer
              </Button>
              <Button
                onClick={handleNextCard}
                className="bg-primary text-primary-foreground py-2 px-4 rounded focus:outline-none"
              >
                Next Card
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Play;
