const url = "http://localhost:8001/books";

const generateBooks = async (count) => {
  try {
    const response = await axios.get(
      `https://fakerapi.it/api/v1/books?_locale=en_US&_quantity=${count}`
    );
    const books = response.data.data.map((book, index) => ({
      id: (index + 1).toString(),
      name: book.title,
      author: book.author,
      numPages: book.pages,
    }));
    console.log(books);
    return { books };
  } catch (error) {
    console.error(`Error fetching book data:`, error);
    return { books: [] };
  }
};

const postJSONData = async (data, url) => {
  try {
    const response = await axios.post(url, data);
    console.log(`Data posted to ${url}:`, response.data);
  } catch (error) {
    console.error(`Error posting data to ${url}:`, error);
  }
};

const main = async () => {
  const bookData = await generateBooks(500);
  await postJSONData(bookData, url);
};

main();
