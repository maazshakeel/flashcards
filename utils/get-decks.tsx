import getConfig from "next/config";

const apiUrl = getConfig().publicRuntimeConfig.apiUrl;

export async function getDecks() {
  const res = await fetch(`${apiUrl}/api/deck/`, {
    headers: { "content-type": "application/json" },
    cache: "no-cache",
  });
  return res.json();
}
