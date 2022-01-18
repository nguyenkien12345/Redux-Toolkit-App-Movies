import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIKEY } from '../apis/apiKey';
import axiosClient from '../apis/axiosClient';

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async (search) => {
        try {
            const type = 'movie';
            const response = await axiosClient.get(`?apiKey=${APIKEY}&s=${search}&type=${type}`);
            const movies = response.data;
            return movies;
        }
        catch(error) {
            console.log(error);
        }
    } 
);

export const fetchAsyncShows = createAsyncThunk(
        'movies/fetchAsyncShows',
        async (search) => {
            try {
                const type = 'series';
                const response = await axiosClient.get(`?apiKey=${APIKEY}&s=${search}&type=${type}`);
                const shows = response.data;
                return shows;
            }
            catch(error) {
                console.log(error);
            }
    }
);

export const fetchAsyncDetailMovieOrShow = createAsyncThunk(
    'movies/fetchAsyncDetailMovieOrShow',
    async (id) => {
        try {
            const response = await axiosClient.get(`?apiKey=${APIKEY}&i=${id}&plot=full`);
            const detail = response.data;
            return detail;
        }
        catch(error) {
            console.log(error);
        }
}
);

const initialState = {
    movies: [],
    shows: [],
    selectedlMovieOrShow: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
        removeSelectedMovieOrShow: (state, action) => {
            state.selectedlMovieOrShow = {};
        }
    },
    extraReducers: {
        // [fetchAsyncMovies.pending]: () => {
        //     console.log("Fetching Data...");
        // },
        // [fetchAsyncMovies.rejected]: () => {
        //     console.log("Fetching Data Failed");
        // },
        [fetchAsyncMovies.fulfilled]: (state,action) => {
            return {...state, movies: action.payload};
        },
        [fetchAsyncShows.fulfilled]: (state, action) => {
            return {...state, shows: action.payload};
        },
        [fetchAsyncDetailMovieOrShow.fulfilled]: (state, action) => {
            return {...state, selectedlMovieOrShow: action.payload};
        }
    }
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetailMovieOrShow = (state) => state.movies.selectedlMovieOrShow;
export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;