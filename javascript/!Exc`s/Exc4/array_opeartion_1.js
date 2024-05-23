function addBook(books, name, pages) {
  const newBook = {
    name: "book6",
    pages: 6,
    white: function () {
      return this.name + " " + this.pages;
    },
  };
  books.push(newBook);
}