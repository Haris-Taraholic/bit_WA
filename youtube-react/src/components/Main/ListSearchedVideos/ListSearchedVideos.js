import React from 'react';
import './ListSearchedVideos.css'

const ListSearchedVideos = ({ videos, onClick }) => (
    <div>
        {videos.map((item, i) => {
            return <div className="row"><div className="ListSearchedVideos__wrapper col-lg-12" key={i} onClick={() => onClick(item.id.videoId)} >
                <img src={item.snippet.thumbnails.medium.url} alt="img" />
                <div className="ListSearchedVideos__info">
                    <h3>{item.snippet.title}</h3>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{item.snippet.description}</p>
                </div>
            </div>
            </div>
        })}
    </div>
);

export { ListSearchedVideos }
