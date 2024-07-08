export async function getTasks() {
  const url = "http://localhost:3000/api/tasks";
  const token = localStorage.getItem("token").replace(/"/g, "");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}

export function updateTask() {}
export function createTask() {}
export function deleteTask() {}
export async function register(details) {
  const url = "http://localhost:3000/api/auth/register";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });
  return response.json();
}

export async function login(details) {
  const url = "http://localhost:3000/api/auth/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });
  return response.json();
}
