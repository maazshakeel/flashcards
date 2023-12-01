export async function getDecks() {
  const res = await fetch(`http://localhost:3000/api/deck/`, {
    headers: { "content-type": "application/json" },
    cache: "no-cache",
  });
  return res.json();
}
