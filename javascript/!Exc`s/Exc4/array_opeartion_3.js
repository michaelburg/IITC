function getBook(books, name) {
  for(const book of books){
    if(book.name==name) return book    
  }}
function updateBookPages(books, name,pages) {
  const bookToUpdate= getBook(books,name)
  bookToUpdate.pages=pages
  return bookToUpdate
}