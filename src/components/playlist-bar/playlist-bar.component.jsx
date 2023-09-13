import React from 'react';
import './playlist-bar.style.scss';

function PlaylistBar({ imageURL, playlistName, totalSongs }) {
    return (
        <div className='playlist-bar'>
            <div className="playlist-image-container">
                <img src={imageURL} alt={playlistName} />
            </div>

            <div className="playlist-details">
                <h1>{playlistName}</h1>

                <p>Playlist • <span>{totalSongs}</span> songs</p>
            </div>            
        </div>
    )
}

export default PlaylistBar;
