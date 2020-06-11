import React from 'react'
import { FaSearch } from "react-icons/fa"
import { FaDizzy } from "react-icons/fa"
import './Search.css'

const Search = (props) => {
    if (props.isUserFound) {
        return (<div className="App__search"><FaSearch />
            <input onChange={props.searchFunction} type='search' id='search' placeholder="Search users" ></input>
        </div>)
    } else {
        return (<div className="App__search"><FaSearch />
            <input onChange={props.searchFunction} type='search' id='search' placeholder="Search users" ></input>\
            <h3 className="Search__nothingFound"><div className="iconSmile"><FaDizzy /></div>We couldn't find any people matching your search</h3>
        </div>)
    }

}
export { Search }