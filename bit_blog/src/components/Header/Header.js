import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return <div className="Header__wrapper">
        <h1>RND BLG</h1>
        <ul className="Header__container">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
}
export { Header }