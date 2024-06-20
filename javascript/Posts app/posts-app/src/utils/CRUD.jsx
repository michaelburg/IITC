export async function getAllPosts() {
  try {
    const response = await fetch(
      "http://localhost:3000/posts?_sort=createdAt&_order=desc"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getPostsById(id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getUserByLogIn(username, password) {
  try {
    const response = await fetch(
      `http://localhost:3000/users?username=${username}&password=${password}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
export async function getUserById(id) {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function createNewPost(newPost) {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error(`Error creating post! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // You can handle the response data as needed
  } catch (error) {
    console.error("Error creating post:", error);
    throw error; // Rethrow the error for handling in your component
  }
}
