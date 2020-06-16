import React from 'react';
import './SuggestedVideos.css'

const SuggestedVideos = (props) => {
    if (props.data !== []) {
        return (<div className="SuggestedVideos__wrapper col-lg-12" > {props.data.map(items =>
            <div onClick={() => props.getId(items)} >
                <img src={items.snippet.thumbnails.medium.url} alt="img" />
                <h4> {items.snippet.title} </h4>
                <p> {items.snippet.chanelTitle} </p>
            </div>
        )
        }
        </div >
        )
    } else { return null; }
}


export { SuggestedVideos }