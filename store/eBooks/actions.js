export default {
  addRandomEBook: ({ commit }, payload) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      commit('setReadingEBook', `RandomEBook${randomNumber}`);
    }, 3000);
  }
};
