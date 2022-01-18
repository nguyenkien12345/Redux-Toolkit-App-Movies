import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncDetailMovieOrShow, getDetailMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies';
import './MovieDetail.scss';

const MovieDetail = () => {

    const {imdbID} = useParams();

    const detail = useSelector(getDetailMovieOrShow);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncDetailMovieOrShow(imdbID));
        // Clear đối tượng cũ đi mỗi khi chọn đối tượng mới
        return () => {
            dispatch(removeSelectedMovieOrShow());
        }
    },[dispatch, imdbID])

    return (
        <div className='movie-section'>
            {Object.keys(detail).length === 0 ? (
                <div>Loading...</div>
            ) : (
            <>
                <div className='section-left'>
                    <div className='movie-title'>{detail.Title}</div>
                    <div className='movie-rating'>
                        <span>
                            IMDB Rating <i className='fa fa-star'></i> : {detail.imdbRating}
                        </span>
                        <span>
                            IMDB Votes <i className='fa fa-thumbs-up'></i> : {detail.imdbVotes}
                        </span>
                        <span>
                            Runtime <i className='fa fa-film'></i> : {detail.Runtime}
                        </span>
                        <span>
                            Year <i className='fa fa-calendar'></i> : {detail.Year}
                        </span>
                    </div>
                    <div className='movie-plot'>{detail.Plot}</div>
                    <div className='movie-info'>
                        <div>
                            <span>Director</span>
                            <span>{detail.Director}</span>
                        </div>
                        <div>
                            <span>Stars</span>
                            <span>{detail.Actors}</span>
                        </div>
                        <div>
                            <span>Generes</span>
                            <span>{detail.Generes}</span>
                        </div>
                        <div>
                            <span>Languages</span>
                            <span>{detail.Language}</span>
                        </div>
                        <div>
                            <span>Awards</span>
                            <span>{detail.Awards}</span>
                        </div>
                    </div>
                </div>
                <div className='section-right'>
                <img src={detail.Poster} alt={detail.Title}/>
            </div>
            </>
            )}
        </div>
    );
};

export default MovieDetail;