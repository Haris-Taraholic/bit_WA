import React from 'react';
import { Link } from 'react-router-dom'

const Post = ({ title, desc, id }) => (
    <div className="ListofPosts__wrapper_post">
        <h3 className="ListofPosts__header_title"><Link to={`/posts/${id}`}>{title}</Link></h3>
        <p>{desc}</p>
    </div >
)
export { Post }