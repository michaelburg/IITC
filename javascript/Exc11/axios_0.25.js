
const urlPost = "https://jsonplaceholder.typicode.com/posts/"
const urlusers = "https://jsonplaceholder.typicode.com/users/"
const table=document.createElement('table')
table.innerHTML+=`
<th>userName</th>
<th>id</th>
<th>title</th>
<th>body</th>`
const loader=document.createElement('div')
loader.className='loader'
document.body.appendChild(loader)

            const promise=new Promise((resolve) => {setTimeout(() => {resolve()}, 2000); });
promise.then(resolveHandler)


function resolveHandler(){
    document.querySelector('.loader').remove()
    axios.get(urlPost).then(function (posts) {
        axios.get(urlusers).then(function (users) {
            posts.data.forEach(post => {
                table.innerHTML+=`<tr>
                    <td>${users.data[post.userId-1].username}</td>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td></tr>`
                });
            }).catch(function (error) {console.error(error)})
        .catch(function (error) {console.error(error)})
    })
document.body.appendChild(table)  
}

