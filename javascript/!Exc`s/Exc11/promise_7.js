const posts = "https://jsonplaceholder.typicode.com/posts";
const users = "https://jsonplaceholder.typicode.com/users";
const comments = "https://jsonplaceholder.typicode.com/comments";

function ctreatGetPromise(url) {
  return new Promise((resolve) => {
    axios.get(url).then(function (response) {
      resolve(response.data.length);
    });
  });
}

function createElementWithCount(count, type) {
  const h1 = document.createElement("h1");
  h1.innerText = count + "-" + type;
  document.body.appendChild(h1);
}

postsResolve = ctreatGetPromise(posts);
usersResolve = ctreatGetPromise(users);
commentsResolve = ctreatGetPromise(comments);

Promise.all([postsResolve, usersResolve, commentsResolve]).then(
  ([postCount, userCount, commentCount]) => {
    createElementWithCount(postCount, "post");
    createElementWithCount(userCount, "user");
    createElementWithCount(commentCount, "comment");
  }
);
