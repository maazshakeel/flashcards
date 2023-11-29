import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log("adsf");
  try {
    const decks = await db.deck.findMany({
      include: {
        flashcards: true,
      },
      where: {
        id: parseInt(params.id),
      },
    });

    console.log("API");
    console.log(decks);
    console.log("API");

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
