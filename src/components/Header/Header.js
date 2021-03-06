import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies";
import user from '../../images/user.png';
import './Header.scss';

const Header = () => {

    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
      e.preventDefault();
      if (search === "") return alert("Please enter search term!");
      dispatch(fetchAsyncMovies(search));
      dispatch(fetchAsyncShows(search));
      setSearch("");
    };

    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'>Movie App</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={search}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src={user} alt='User'/>
            </div>
        </div>
    );
};

export default Header;