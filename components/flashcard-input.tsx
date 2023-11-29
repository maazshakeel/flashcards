"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import { ChevronDown, ChevronUp, XCircle } from "lucide-react";
import { FlashCardInput } from "@/types/flash-card.types";

export default function FlashCardInput({
  id,
  answer,
  question,
  setQuestion,
  setAnswer,
  onDelete,
}: FlashCardInput) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Card className="lg:max-w-4xl w-full shadow-sm mb-5">
      <CardHeader>
        <div className="flex justify-between items-start ">
          <div className="flex justify-center items-start gap-3 ">
            <button
              className="hover:cursor-pointer shadow-sm"
              onClick={toggleForm}
            >
              {showForm ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div>
              <CardTitle>Flashcard {id}</CardTitle>
              <CardDescription className="mt-1">
                Give your flashcard a question and answer.
              </CardDescription>
            </div>
          </div>

          <button
            className="hover:cursor-pointer shadow-sm"
            onClick={() => onDelete(id)}
          >
            <XCircle className="relative bottom-0 left-0" />
          </button>
        </div>
      </CardHeader>

      {showForm && (
        <CardContent>
          <form>
            <div className="grid grid-cols-2 w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Textarea
                  id="name"
                  placeholder="Your Question?"
                  className="h-28 md:h-40 md:text-md lg:text-md lg:h-56"
                  value={question}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setQuestion(e.target.value)
                  }
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Textarea
                  id="name"
                  placeholder="The Answer."
                  className="h-28 md:h-40 md:text-md lg:text-md lg:h-56"
                  value={answer}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setAnswer(e.target.value)
                  }
                />
              </div>
            </div>
          </form>
        </CardContent>
      )}
    </Card>
  );
}
