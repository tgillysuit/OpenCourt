export async function getGames() {
  const res = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/games`);
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}

export async function createGame(gameData) {
  // Send POST request with event data 
  const res = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/games`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gameData),
  });

  if (!res.ok) throw new Error("Failed to create game.");
  return res.json();
}