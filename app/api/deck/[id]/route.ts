import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const decks = await db.deck.findMany({
      include: {
        flashcards: true,
      },
      where: {
        id: parseInt(params.id),
      },
    });

    console.log("\nAPI==============================");
    console.log(decks[0].flashcards);
    console.log("\nAPI==============================\nend\n\n");

    return NextResponse.json({ success: true, data: decks }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error fetching decks." },
      { status: 500 },
    );
  } finally {
    await db.$disconnect();
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;

    if (!id || isNaN(parseInt(id as string))) {
      return NextResponse.json(
        { success: false, message: "Invalid deckId" },
        { status: 400 },
      );
    }

    // Delete Deck and its associated Flashcards
    const deletedDeck = await db.deck.delete({
      where: { id: parseInt(id as string) },
      include: { flashcards: true },
    });

    return NextResponse.json(
      { success: true, data: deletedDeck },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error deleting deck." },
      { status: 500 },
    );
  } finally {
    await db.$disconnect();
  }
}
