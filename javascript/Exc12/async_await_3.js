const posts = "https://jsonplaceholder.typicode.com/posts";
const users = "https://jsonplaceholder.typicode.com/users";
const comments = "https://jsonplaceholder.typicode.com/comments";

function ctreatGetPromise(url){
    return new Promise((resolve) => {
        axios.get(url).then(function (response) {
            resolve(response.data.length);
        })
    })
}

function createElementWithCount(count,type){
    const h1=document.createElement('h1')
    h1.innerText=count+"-"+type
    document.body.appendChild(h1)
}
async function fetchData(){
    const postCount=ctreatGetPromise(posts)
    createElementWithCount(await postCount,'post')
    
    const userCount=ctreatGetPromise(users)
    createElementWithCount(await userCount,'user')

    const commentCount=ctreatGetPromise(comments)
    createElementWithCount(await commentCount,'comment')

}
fetchData()

    ///// 
    postsResolve=ctreatGetPromise(posts)
    usersResolve=ctreatGetPromise(users)
    commentsResolve=ctreatGetPromise(comments)
    
async function fetchCountData(){
    count=0
    const postCount=ctreatGetPromise(posts)
    count+=await postCount
    
    const userCount=ctreatGetPromise(users)
    count+=await userCount
    
    const commentCount=ctreatGetPromise(comments)
    count+=await commentCount
    
    createElementWithCount(count,'count')

}
fetchCountData()