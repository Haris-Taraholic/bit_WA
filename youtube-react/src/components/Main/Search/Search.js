import React from 'react';
import './Search.css';
import { FiSearch } from 'react-icons/fi';

const Search = (props) => {
    return (
        <div className="Search__wrapper col-lg-12">
            <span className="col-lg-1"><FiSearch /></span> <input className="Search__input col-lg-11" type="search" placeholder='Search videos...' onKeyDown={props.getData} />
            <hr></hr>
        </div>
    )
}

export { Search }