import React from "react";
import { Link } from 'react-router-dom'
const Authors = ({ name, id }) => {
    return (
        <div><h1><Link to={`/author/${id}`} >{name}</Link></h1></div>
    )
}

export { Authors }