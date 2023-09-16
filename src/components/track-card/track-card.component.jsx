import React, { useContext } from 'react';
import './track-card.style.scss';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { CurrentTrackContext } from '../../context/current-track-context';
import { TokenContext } from '../../context/token-context';
import { playTrack } from '../../utils/spotify-functions';

function TrackCard({ track }) {
    const { token } = useContext(TokenContext);
    const {
        currentTrack,
        setButtonClicked,
        playerState,
        setPlayerState
    } = useContext(CurrentTrackContext);

    const playThisTrack = async (track) => {
        if(currentTrack) {
            await playTrack(token, track);

            if(!playerState) {
                setPlayerState(true);
            }

            setButtonClicked(true);
        }
    }

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return (
        <div className='track-card'>
            <div className="track-image">
                <img src={track.track.album.images[0].url} alt="" />

                <div className="play-icon">
                    <PlayCircleIcon 
                        onClick={() => track.track.available_markets.length !== 0 && playThisTrack(track)} 
                    />
                </div>
            </div>

            <div className="track-card-text">
                <h1 className="track-title">{truncate(track.track.name, 18)}</h1>
                <p className="track-description">{track.track.artists[0].name}</p>
            </div>
        </div>
    )
}

export default TrackCard;
