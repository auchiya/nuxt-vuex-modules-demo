export default {
  addRandomBook: ({ commit }, payload) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      commit('setReadingBook', `RandomBook${randomNumber}`);
    }, 3000);
  }
};
