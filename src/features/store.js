import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movies';

const store = configureStore({
    reducer: {
        movies: movieReducer 
    }
});

export default store;