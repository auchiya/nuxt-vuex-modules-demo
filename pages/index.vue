<template>
  <div>
    <div>
      <h1>Root store (Books)</h1>
      <h3>{{ myRootGetterBookListCount }} Books now.</h3>
      <h2>Book list: {{ myRootBookList }}</h2>
      <button @click="myRootMutationAddBookToList('ANewBook')">
        Add to list
      </button>
      <h2>Now reading: {{ myRootBookReading }}</h2>
      <button @click="myRootActionAddRandomBook">Read some book(Async)</button>
      <button @click="myRootMutationAddBook('New Sync Book')">
        Read some book(Sync)
      </button>
      <hr />
    </div>

    <div style="padding-left: 25px;">
      <h1>Module store (EBooks)</h1>
      <h3>{{ myModuleGetterEBookListCount }} EBooks now.</h3>
      <h2>EBook list: {{ myModuleEBooksList }}</h2>
      <button @click="myModuleMutationAddEBookToList('ANewEBook')">
        Add to list
      </button>
      <h2>Now reading: {{ myModuleEBookReading }}</h2>
      <button @click="myModuleActionAddRandomEBook">
        Read some ebook(Async)
      </button>
      <button @click="myModuleMutationAddEBook('New Sync EBook')">
        Read some ebook(Sync)
      </button>
      <hr />
    </div>

    <div style="padding-left: 50px;">
      <h1>Module store (Special EBooks)</h1>
      <h3>{{ myModuleGetterSpecialEBookListCount }} Special EBooks now.</h3>
      <h2>Special EBook list: {{ myModuleSpecialEBooksList }}</h2>
      <button
        @click="myModuleMutationAddSpecialEBookToList('ANewSpecialEBook')"
      >
        Add to list
      </button>
      <h2>Now reading: {{ myModuleSpecialEBookReading }}</h2>
      <button @click="myModuleActionAddRandomSpecialEBook">
        Read some ebook(Async)
      </button>
      <button
        @click="myModuleMutationAddSpecialEBook('New Sync Special EBook')"
      >
        Read some ebook(Sync)
      </button>
      <hr />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    // ROOT STATE
    ...mapState({
      myRootBookList: (state) => state.booksList,
      myRootBookReading: (state) => state.bookReading
    }),
    // ROOT GETTERS
    ...mapGetters({
      myRootGetterBookListCount: 'bookListCount'
    }),

    // MODULE STATE
    ...mapState({
      myModuleEBooksList: (state) => {
        return state.eBooks.eBooksList;
      },
      myModuleEBookReading: (state) => {
        return state.eBooks.eBookReading;
      }
    }),
    // MODULE GETTERS
    ...mapGetters({
      myModuleGetterEBookListCount: 'eBooks/eBookListCount'
    }),

    // NESTED MODULE STATE
    ...mapState({
      myModuleSpecialEBooksList: (state) => {
        return state.eBooks.specialEBooks.specialEBooksList;
      },
      myModuleSpecialEBookReading: (state) => {
        return state.eBooks.specialEBooks.specialEBookReading;
      }
    }),
    // NESTED MODULE GETTERS
    ...mapGetters({
      myModuleGetterSpecialEBookListCount:
        'eBooks/specialEBooks/specialEBookListCount'
    })
  },
  methods: {
    // ROOT ACTIONS
    ...mapActions({
      myRootActionAddRandomBook: 'addRandomBook'
    }),
    // ROOT MUTATIONS
    ...mapMutations({
      myRootMutationAddBook: 'setReadingBook',
      myRootMutationAddBookToList: 'addBookToList'
    }),

    // MODULE ACTIONS
    ...mapActions({
      myModuleActionAddRandomEBook: 'eBooks/addRandomEBook'
    }),
    // MODULE MUTATIONS
    ...mapMutations({
      myModuleMutationAddEBook: 'eBooks/setReadingEBook',
      myModuleMutationAddEBookToList: 'eBooks/addEBookToList'
    }),

    // NESTED MODULE ACTIONS
    ...mapActions({
      myModuleActionAddRandomSpecialEBook:
        'eBooks/specialEBooks/addRandomSpecialEBook'
    }),
    // NESTED MODULE MUTATIONS
    ...mapMutations({
      myModuleMutationAddSpecialEBook:
        'eBooks/specialEBooks/setReadingSpecialEBook',
      myModuleMutationAddSpecialEBookToList:
        'eBooks/specialEBooks/addSpecialEBookToList'
    })
  }
};
</script>
