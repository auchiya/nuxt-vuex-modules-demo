export default {
  addSpecialEBookToList(state, eBook) {
    state.specialEBooksList.push(eBook);
  },
  setReadingSpecialEBook(state, eBook) {
    state.specialEBookReading = eBook;
  }
};
