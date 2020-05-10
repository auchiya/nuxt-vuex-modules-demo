export default {
  addRandomSpecialEBook: ({ commit }, payload) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      commit('setReadingSpecialEBook', `RandomSpecialEBook${randomNumber}`);
    }, 3000);
  }
};
