export function getTasks() {}
export function updateTask() {}
export function createTask() {}
export function deleteTask() {}
export function register(details) {
  console.log(details);
}

export async function login(details) {
  console.log(details);
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
