"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";
import { Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "./ui/use-toast";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import LogoutButton from "./logout-button";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Menubar className="p-6">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="flex gap-1 items-center">
          <Zap size={20} />
          <MenubarMenu>LetFlash</MenubarMenu>
        </Link>
        <div className="flex gap-1 items-center">
          {session ? (
            <>
              <MenubarMenu>
                <MenubarTrigger>Create Deck</MenubarTrigger>

                <MenubarContent>
                  <MenubarItem onClick={() => router.push("/create")}>
                    Deck <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      toast({
                        description: "This feature is still in process!",
                      });
                    }}
                  >
                    Upload File <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <LogoutButton />
            </>
          ) : (
            <>
              <Button
                variant={"ghost"}
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </Button>

              <Button
                variant={"ghost"}
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Create Account
              </Button>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </Menubar>
  );
}
