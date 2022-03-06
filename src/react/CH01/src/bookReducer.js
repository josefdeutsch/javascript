import { createStore } from 'redux';

const initialState = Object.freeze({ // make immutable
    title: 'Beautiful Code',
    author: 'Douglas Crockford'
});

function reducer(book = initialState, action) {
  switch (action.type) {
    case 'CHANGE_BOOK_TITLE':
      return {
        ...book, 
      
        // are called spread attributes which, as the name represents, it allows an expression to be expanded
        // var parts = ['two', 'three'];
        // var numbers = ['one', ...parts, 'four', 'five']; 
        // ["one", "two", "three", "four", "five"]
        // The spread properties syntax is used inside the object literal to copy all the properties of the book object into the newly created object.

        title: action.title
      }
    default:
      return book
  }
}

const store = createStore(reducer);

store.subscribe(function(){
  console.log(store.getState());
});

store.dispatch({ type: 'CHANGE_BOOK_TITLE', title: 'JavaScript The Best Parts' });

store.dispatch({ type: 'CHANGE_BOOK_TITLE', title: 'How JavaScript Works' });