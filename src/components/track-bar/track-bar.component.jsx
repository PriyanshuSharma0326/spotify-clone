import React, { useContext } from 'react';
import './track-bar.style.scss';
import { playTrack } from '../../utils/spotify-functions';
import { TokenContext } from '../../context/token-context';
import { CurrentTrackContext } from '../../context/current-track-context';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function TrackBar({ track, index }) {
    const { token } = useContext(TokenContext);
    const { currentTrack, setButtonClicked, playerState, setPlayerState } = useContext(CurrentTrackContext);

    const date = new Date(track.added_at);

    const comparisonDate = new Date("2010-01-01");
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date < comparisonDate ? '' : date.toLocaleDateString("en-US", options);

    const minutes = Math.floor(track.track.duration_ms / 60000);
    const seconds = Math.floor((track.track.duration_ms % 60000) / 1000);

    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    const playThisTrack = async (track) => {
        if(currentTrack) {
            await playTrack(token, track);

            if(!playerState) {
                setPlayerState(true);
            }

            setButtonClicked(true);
        }
    }

    return (
        <div className={`track-bar-container ${track.track.available_markets.length === 0 && 'inactive'}`}>
            <div className="count">
                <h1>
                    {index}
                </h1>
                <PlayArrowIcon 
                    onClick={() => track.track.available_markets.length !== 0 && playThisTrack(track)} 
                />
            </div>

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
