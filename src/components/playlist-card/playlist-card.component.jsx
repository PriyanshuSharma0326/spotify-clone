import React from 'react';
import './playlist-card.style.scss'

function PlaylistCard({ playlistImageURL, title, desc }) {
    return (
        <div className='playlist-card'>
            <img src={playlistImageURL} alt="" className="playlist-image" />

            <div className="playlist-card-text">
                <h1 className="playlist-title">{title}</h1>
                <p className="playlist-description">{desc}</p>
            </div>
        </div>
    )
}

export default PlaylistCard;
