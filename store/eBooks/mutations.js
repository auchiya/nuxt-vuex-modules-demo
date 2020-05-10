export default {
  addEBookToList(state, eBook) {
    state.eBooksList.push(eBook);
  },
  setReadingEBook(state, eBook) {
    state.eBookReading = eBook;
  }
};
