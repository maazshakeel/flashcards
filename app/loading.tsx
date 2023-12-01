import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";

export default function Loading() {
  return (
    <div className="p-14 flex flex-col gap-6">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-wide lg:text-4xl">
        Current Decks
      </h1>
      {/* @ts-ignore */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
          <div
            key={id}
            className="flex items-start space-x-4 pt-3 pr-3 hover:bg-none hover:cursor-default"
          >
            <div className="space-y-5">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[350px]" />
            </div>
          </div>
        ))}
      </div>
      <div className="fixed overflow-hidden bottom-5 right-5">
        <Button
          variant={"outline"}
          className="border-dashed sm:py-12 sm:px-16 py-10 px-10"
        >
          <Plus size={50} />
        </Button>
      </div>
    </div>
  );
}
