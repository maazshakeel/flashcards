import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { deleteDeck } from "@/utils/delete-decks";
import { toast } from "./ui/use-toast";

type TDeleteButtonProps = {
  id: number;
};

export default function DeleteButton({ id }: TDeleteButtonProps) {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await deleteDeck(id);
    if (!res.success) {
      toast({
        variant: "destructive",
        title: "Couldn't Delete!",
        description: "Your card wasn't deleted.",
      });
    } else {
      toast({
        variant: "default",
        title: "Deleted Successfully!",
        description: "Your card has been deleted.",
      });

      router.refresh();
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your card
            and remove all the flashcards fromt he server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
