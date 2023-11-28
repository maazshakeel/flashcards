import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { CreateDeckRequestBody } from "@/types/flash-card.types";

// CREATE DECK
export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { deckName, flashcards }: CreateDeckRequestBody = req;

    // Create Deck
    const deck = await db.deck.create({
      data: {
        deckName,
        flashcards: {
          create: flashcards,
        },
      },
      include: {
        flashcards: true,
      },
    });

    return NextResponse.json({ success: true, data: deck }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error uploading data." },
      { status: 500 }
    );
  } finally {
    await db.$disconnect();
  }
}

// GET ALL DECKS
export async function GET() {
  try {
    const decks = await db.deck.findMany({
      include: {
        flashcards: true,
      },
    });

    return NextResponse.json({ success: true, data: decks }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error fetching decks." },
      { status: 500 }
    );
  } finally {
    await db.$disconnect();
  }
}
