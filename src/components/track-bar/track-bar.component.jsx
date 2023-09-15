import React from 'react';
import './track-bar.style.scss';

function TrackBar({ track, index }) {
    const date = new Date(track.added_at);

    const comparisonDate = new Date("2010-01-01");
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date < comparisonDate ? '' : date.toLocaleDateString("en-US", options);

    const minutes = Math.floor(track.track.duration_ms / 60000);
    const seconds = Math.floor((track.track.duration_ms % 60000) / 1000);

    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return (
        <div className='track-bar-container'>
            <h1 className="count">{index}</h1>

            <h1 className="track-info">
                <div className="track-image">
                    <img src={track.track.album.images[0].url} alt="" />
                </div>

                <div className="track-details">
                    <h1>{track.track.name}</h1>
                    <p>{track.track.artists[0].name}</p>
                </div>
            </h1>

            <h1 className="album-title">{track.track.album.name}</h1>

            <h1 className="date">{formattedDate}</h1>

            <div className="duration">{formattedTime}</div>
        </div>
    )
}

export default TrackBar;
