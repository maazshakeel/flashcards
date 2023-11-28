import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <Menubar className="p-6">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <Zap size={20} />
          <MenubarMenu>LetFlash</MenubarMenu>
        </div>
        <div className="flex gap-1 items-center">
          <MenubarMenu>
            <MenubarTrigger>Create Deck</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Flashcard <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Upload File <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <ModeToggle />
        </div>
      </div>
    </Menubar>
  );
}
