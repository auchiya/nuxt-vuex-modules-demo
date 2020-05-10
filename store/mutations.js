export default {
  addBookToList(state, book) {
    state.booksList.push(book);
  },
  setReadingBook(state, book) {
    state.bookReading = book;
  }
};
