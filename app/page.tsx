"use client";
import FlashCards from "@/components/flashcards";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-14 flex flex-col gap-6">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-wide lg:text-4xl">
        Current Decks
      </h1>
      <FlashCards />
      <div className="fixed overflow-hidden bottom-5 right-5">
        <Link href={"/create"}>
          <Button
            variant={"outline"}
            className="border-dashed sm:py-12 sm:px-16 py-10 px-10"
          >
            <Plus size={50} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
