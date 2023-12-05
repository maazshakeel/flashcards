export async function deleteDeck(id: number) {
  const res = await fetch(`https://projectwithnoname9993.vercel.app/${id}`, {
    headers: { "content-type": "application/json" },
    cache: "no-cache",
    method: "DELETE",
  });
  return res.json();
}
