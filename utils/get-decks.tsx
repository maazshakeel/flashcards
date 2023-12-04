export async function getDecks() {
  const res = await fetch("http://localhost:3000/api/deck/", {
    headers: { "content-type": "application/json" },
    method: "GET",
  });
  return res.json();
}
