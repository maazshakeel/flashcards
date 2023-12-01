import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export async function deleteDeck(id: number) {
  const res = await fetch(`${publicRuntimeConfig.apiUrl}/api/deck/${id}`, {
    headers: { "content-type": "application/json" },
    cache: "no-cache",
    method: "DELETE",
  });
  return res.json();
}
