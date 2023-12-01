import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export async function getDecks() {
  const res = await fetch(`${publicRuntimeConfig.apiUrl}/api/deck/`, {
    headers: { "content-type": "application/json" },
    cache: "no-cache",
  });
  return res.json();
}
