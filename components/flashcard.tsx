import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FlashCardProps } from "@/types/flash-card.types";
import { Trash2 } from "lucide-react";

export default function FlashCard({ title, description }: FlashCardProps) {
  return (
    <Card className="md:max-w-sm w-full hover:bg-secondary bg-card transition-all group">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Trash2
            size={20}
            className="text-destructive group-hover:text-red-600"
          />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
