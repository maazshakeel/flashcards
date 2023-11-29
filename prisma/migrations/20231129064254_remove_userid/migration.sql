/*
  Warnings:

  - You are about to drop the column `userId` on the `Deck` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Deck" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deckName" TEXT NOT NULL
);
INSERT INTO "new_Deck" ("deckName", "id") SELECT "deckName", "id" FROM "Deck";
DROP TABLE "Deck";
ALTER TABLE "new_Deck" RENAME TO "Deck";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
