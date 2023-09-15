import React, { useContext } from 'react';
import './playlist-bar.style.scss';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../context/token-context';

function PlaylistBar({ imageURL, playlistName, totalSongs, playlistID }) {
    const navigate = useNavigate();

    const { hash } = useContext(TokenContext);
    
    const routeHandler = () => {
        navigate(`/playlist/${playlistID}/${hash}`);
    }
    
    return (
        <div className='playlist-bar' onClick={routeHandler}>
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
