export async function getDecks(userId: any) {
  const res = await fetch(
    "https://projectwithnoname9993.vercel.app/api/deck/",
    {
      headers: { "content-type": "application/json" },
      method: "GET",

      // body: JSON.stringify({
      //   userId,
      // }),
    },
  );
  return res.json();
}
