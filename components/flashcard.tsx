import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FlashCardProps } from "@/types/flash-card.types";

export default function FlashCard({ title, description }: FlashCardProps) {
  return (
    <Card className="md:max-w-sm w-full hover:bg-secondary bg-card transition-all">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
