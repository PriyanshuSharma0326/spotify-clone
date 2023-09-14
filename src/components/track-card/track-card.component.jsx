import React from 'react';
import './track-card.style.scss'

function TrackCard({ trackImageURL, title, desc }) {
    return (
        <div className='track-card'>
            <img src={trackImageURL} alt="" className="track-image" />

            <div className="track-card-text">
                <h1 className="track-title">{title}</h1>
                <p className="track-description">{desc}</p>
            </div>
        </div>
    )
}

export default TrackCard;
