export async function getUsers() {
  const res = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/users`);
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}

export async function createUser(userData) {
  const res = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) throw new Error("Failed to create user.");
  return res.json();
}