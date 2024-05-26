const url = "http://localhost:8001/users";
function addToTable(user) {
  const table = document.querySelector(".usersTable");
  table.innerHTML += `
    <tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
    </tr>`;
}
function GetAll() {
  const table = document.querySelector(".usersTable");
  table.innerHTML = `
        <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
        </tr>`;
  axios
    .get(url)
    .then(function (response) {
      response.data.forEach((user) => addToTable(user));
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
}

function addUser() {
  event.preventDefault();
  try {
    addForm = document.querySelector(".addUser").children;
    post = {
      id: addForm[0].value,
      firstName: addForm[1].value,
      lastName: addForm[2].value,
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

function updateUser() {
  try {
    addForm = document.querySelector(".addUser").children;
    post = {
      id: addForm[0].value,
      firstName: addForm[1].value,
      lastName: addForm[2].value,
    };
    axios.get(url);
    addToTable(post);
    alert("yay");
  } catch {
    alert("nope");
  }
}
