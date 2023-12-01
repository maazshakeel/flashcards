export async function deleteDeck(id: number) {
  const res = await fetch(`http://localhost:3000/api/deck/${id}`, {
    headers: { "content-type": "application/json" },
    cache: "no-cache",
    method: "DELETE",
  });
  return res.json();
}
