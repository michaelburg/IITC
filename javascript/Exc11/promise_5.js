// Write two functions fetchUser and fetchPosts.
// fetchUser should return a Promise that resolves to { id: 1, name: 'John Doe' } after 1 second. 
// fetchPosts should return a Promise that resolves to ['Post1', 'Post2'] after 2 seconds. 
// Use Promise.all to fetch both user and posts simultaneously and log the results.


function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John Doe" });
        }, 1000);
    });
}
function fetchPosts(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Post1', 'Post2']);
        }, 2000);
    });
}
Promise.all([fetchUser(), fetchPosts()])
    .then(([user, posts]) => {
        console.log('User:', user);
        console.log('Posts:', posts);
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });