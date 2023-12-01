import getConfig from "next/config";

const apiUrl = getConfig().publicRuntimeConfig.apiUrl;

export async function deleteDeck(id: number) {
  const res = await fetch(`${apiUrl}/api/deck/${id}`, {
    headers: { "content-type": "application/json" },
    cache: "no-cache",
    method: "DELETE",
  });
  return res.json();
}
