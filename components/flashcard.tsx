"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FlashCardProps } from "@/types/flash-card.types";
import { Trash2 } from "lucide-react";
import { deleteDeck } from "@/utils/delete-decks";
import { toast } from "./ui/use-toast";
import Link from "next/link";

export default function FlashCard({ id, title, description }: FlashCardProps) {
  const handleDelete = async () => {
    const res = await deleteDeck(parseInt(id));
    if (!res.ok) {
      toast({
        description: "Failed!",
      });
    } else {
      toast({
        description: "Success!",
      });
    }
  };
  return (
    <Link href={{ pathname: `/${id}/play` }} key={id}>
      <Card className="md:max-w-sm w-full hover:bg-secondary bg-card transition-all group">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            <Trash2
              size={20}
              className="text-destructive group-hover:text-red-600"
              onClick={handleDelete}
            />
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
