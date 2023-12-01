"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FlashCardProps } from "@/types/flash-card.types";
import Link from "next/link";
import { Button } from "./ui/button";
import DeleteButton from "./delete-button";

export default function FlashCard({ id, title, description }: FlashCardProps) {
  return (
    <Card className="md:max-w-sm w-full bg-card transition-all group">
      <CardHeader>
        <CardTitle className="text-md sm:text-lg">{title}</CardTitle>
        <CardDescription className="text-xs sm:text-md">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <div className="w-full flex justify-between">
          <Link href={{ pathname: `/${id}/play` }} key={id}>
            <Button variant={"default"} className="sm:px-8 sm:p-5">
              Play
            </Button>
          </Link>

          <DeleteButton id={parseInt(id)} />
        </div>
      </CardFooter>
    </Card>
  );
}
