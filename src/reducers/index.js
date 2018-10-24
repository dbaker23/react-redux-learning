import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import reducer_active_book from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: reducer_active_book
});

export default rootReducer;