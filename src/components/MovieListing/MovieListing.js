import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    const showMovies = () => {
        let html = '';
        // Truy cập vào thuộc tính Response của movies được trả về từ API để kiểm tra xem có lấy được dữ liệu hay không
        if(movies.Response === 'True'){
            // Truy cập vào thuộc tính Search của movies được trả về từ API để lấy ra danh sách các bộ phim
            html = movies.Search.map((movie,index) => (
                <MovieCard key={index} movie={movie}/>
            ))
        }
        else{
            // Truy cập vào thuộc tính Error của movies được trả về từ API để lấy ra lỗi
            html = `<div className="movies-error"><h3>${movies.Error}</h3></div>`
        }
        return html;
    }

    const showShows = () => {
        let html = '';
        // Truy cập vào thuộc tính Response của shows được trả về từ API để kiểm tra xem có lấy được dữ liệu hay không
        if(shows.Response === 'True'){
            // Truy cập vào thuộc tính Search của shows được trả về từ API để lấy ra danh sách các bộ phim
            html = shows.Search.map((movie,index) => (
                <MovieCard key={index} movie={movie}/>
            ))
        }
        else{
            // Truy cập vào thuộc tính Error của shows được trả về từ API để lấy ra lỗi
            html = `<div className="shows-error"><h3>${shows.Error}</h3></div>`
        }
        return html;
    }

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {/* <Slider {...settings}></Slider> */}
                    {showMovies()}
                </div>
            </div>
            <div className='show-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    {/* <Slider {...settings}></Slider> */}
                    {showShows()}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;