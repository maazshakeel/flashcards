import FlashCard from "@/components/flash-card";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-14 flex flex-col gap-6">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-wide lg:text-4xl">
        Current Decks
      </h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Link href="/">
          <FlashCard
            title="Vocabulary"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque! Itaque commodi neque nam temporibus."
          />
        </Link>
        <Link href="/">
          <FlashCard
            title="Vocabulary"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque! Itaque commodi neque nam temporibus."
          />
        </Link>
        <Link href="/">
          <FlashCard
            title="Vocabulary"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque! Itaque commodi neque nam temporibus."
          />
        </Link>
        <Link href="/">
          <FlashCard
            title="Vocabulary"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque! Itaque commodi neque nam temporibus."
          />
        </Link>
        <Link href="/">
          <FlashCard
            title="Vocabulary"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque! Itaque commodi neque nam temporibus."
          />
        </Link>
        <div className="fixed overflow-hidden bottom-5 right-5">
          <Button
            variant={"outline"}
            className="border-dashed sm:py-12 sm:px-16 py-10 px-10"
          >
            <Plus size={50} />
          </Button>
        </div>
      </div>
    </div>
  );
}
