
function deleteBook(books, name) {
  const indexToRemove = books.findIndex(book => book.name === name);
  if (indexToRemove !== -1) {
    books.splice(indexToRemove, 1);
    return true
  }
  return false
}