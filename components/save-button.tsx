"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";

type TSaveButtonProps = {
  disabled: boolean;
  deckName: string;
  flashcards: any;
  setDeckName: (value: any) => any;
};

export default function SaveButton({
  disabled,
  deckName,
  flashcards,
  setDeckName,
}: TSaveButtonProps) {
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const router = useRouter();

  const handleSave = async () => {
    try {
      setIsSaving(true);

      // Make API request to /createDeck
      const response = await fetch("http://localhost:3000/api/deck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deckName,
          flashcards,
        }),
      });

      if (!response.ok) {
        // Handle error if the API request is not successful
        console.error("Failed to save changes");

        toast({
          description: "Failed to create deck",
        });
      } else {
        // Handle success, e.g., show a success message
        console.log("Changes saved successfully");
      }
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
      setIsSaving(false);
      toast({
        description: "Deck saved successfully",
      });
      router.back();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="px-10 py-6">
          {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Save Changes</DialogTitle>
          <DialogDescription>
            Make changes to your deck here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Deck Name:
            </Label>
            <Input
              id="name"
              defaultValue={deckName}
              value={deckName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDeckName(e.target.value)
              }
              placeholder="e.x: Vocabulary"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="submit" onClick={handleSave}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}