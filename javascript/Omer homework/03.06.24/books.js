import { DUMMY_BOOKS } from "./const.js";
window.onload = oninit;

function oninit() {
  OnGetBooks();
}

function OnGetBooks() {
  const table = document.querySelector(".book-list");
  let li = document.createElement("li");
  li.innerText = `id,bookName,author`;
  table.appendChild(li);
  DUMMY_BOOKS.forEach((book) => {
    let li = document.createElement("li");
    li.innerText = `${book.id},${book.bookname},${book.author}`;
    table.appendChild(li);
  });
  console.log(DUMMY_BOOKS);
}
