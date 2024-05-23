function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000); // 1-second delay
  });
}

// Demonstrate promise chaining
getUser()
  .then((user) => {
    console.log(user);
    return user;
  })
  .then((user) => {
    console.log(`Hello, ${user.name}! Welcome to our platform.`);
  });
