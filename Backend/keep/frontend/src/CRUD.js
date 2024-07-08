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

export async function updateTask(updatedTask) {
  const token = localStorage.getItem("token").replace(/"/g, "");
  const url = "http://localhost:3000/api/tasks";

  // Filter out todos with empty titles and remove the _id property
  const cleanedTodoList = updatedTask.todoList
    .filter((todo) => todo.title.trim() !== "")
    .map((todo) => {
      const { _id, ...rest } = todo;
      return rest;
    });

  const cleanedTask = {
    ...updatedTask,
    todoList: cleanedTodoList,
  };
  if (
    cleanedTask.title == "" &&
    cleanedTask.body == "" &&
    cleanedTask.todoList.length == 0
  )
    deleteTask(cleanedTask);
  return;
  try {
    const response = await fetch(`${url}/${updatedTask._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cleanedTask),
    });

    if (!response.ok) {
      throw new Error("Failed to update task");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createTask(newTask) {
  const token = localStorage.getItem("token").replace(/"/g, "");
  const url = "http://localhost:3000/api/tasks"; // Replace with your API URL
  const cleanedTodoList = newTask.todoList
    .filter((todo) => todo.title.trim() !== "")
    .map((todo) => {
      const { id, ...rest } = todo; // Assuming `id` is used as `_id` in your API
      return rest;
    });

  const cleanedTask = {
    ...newTask,
    todoList: cleanedTodoList,
  };
  if (
    cleanedTask.title == "" &&
    cleanedTask.body == "" &&
    cleanedTask.todoList.length == 0
  )
    return;
  console.log(cleanedTask);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cleanedTask), // Send cleanedTask in the request body
    });

    if (!response.ok) {
      throw new Error("Failed to create task");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function deleteTask(task) {
  const token = localStorage.getItem("token").replace(/"/g, "");
  const url = `http://localhost:3000/api/tasks/${task._id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete task");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

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
