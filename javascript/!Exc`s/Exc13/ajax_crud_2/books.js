const url = "http://localhost:8001/books";
function addToTable(book) {
  const table = document.querySelector(".booksTable");
  table.innerHTML += `
    <tr>
        <td>${book.id}</td>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.numPages}</td>
    </tr>`;
}
function GetAll() {
  const table = document.querySelector(".booksTable");
  table.innerHTML = `
        <tr>
            <th>id</th>
            <th>name</th>
            <th>author</th>
            <th>numPages</th>
        </tr>`;
  axios
    .get(url)
    .then(function (response) {
      response.data.forEach((book) => addToTable(book));
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
}

function addbook() {
  event.preventDefault();
  try {
    addForm = document.querySelector(".addbook").children;
    post = {
      id: addForm[0].value,
      name: addForm[1].value,
      author: addForm[2].value,
      numPages: addForm[2].value,
    };
    axios.post(url, post);
    addToTable(post);
    alert("yay");
  } catch {
    alert("nope");
  }
}

function removePost() {
  event.preventDefault();
  try {
    axios.delete(url + "/" + document.querySelector(".id-to-remove").value);
    GetAll();
    alert("removed");
  } catch {
    alert("not found");
  }
}

function updatebook() {
  try {
    addForm = document.querySelector(".addbook").children;
    post = {
      id: addForm[0].value,
      name: addForm[1].value,
      author: addForm[2].value,
      numPages: addForm[2].value,
    };
    axios.get(url);
    addToTable(post);
    alert("yay");
  } catch {
    alert("nope");
  }
}
