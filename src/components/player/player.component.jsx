import React, { useContext } from 'react';
import './player.style.scss';
import { CurrentTrackContext } from '../../context/current-track-context';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { TokenContext } from '../../context/token-context';
import { changeTrackState, goToTrack } from '../../utils/spotify-functions';

function Player() {
    const { currentTrack, setButtonClicked, playerState, setPlayerState } = useContext(CurrentTrackContext);
    const { token } = useContext(TokenContext);

    const listOfArtists = currentTrack?.album.artists.map(artist => 
        artist.name
    );

    const changeTrack = async (type) => {
        await goToTrack(token, type);
        if(!playerState) {
            setPlayerState(true);
        }
        setButtonClicked(true);
    }

    const changePlayingStateOfTrack = async () => {
        const state = playerState ? "pause" : "play";
        await changeTrackState(token, state);
        setPlayerState(!playerState);
    }

    return (
        <div className='player-container'>
            <div className="track-details">
                <div className="track-image">
                    <img src={currentTrack?.album.images[0].url} alt={currentTrack?.name} />
                </div>

                <div className="track-title-and-artists">
                    <h1 className="track-title">{currentTrack?.name}</h1>

                    <h2 className="track-artists">
                        {listOfArtists?.join(', ')}
                    </h2>
                </div>
            </div>

            <div className="track-controls-container">
                <div className="track-controls">
                    <div className="prev-icon" onClick={() => changeTrack('previous')}>
                        <SkipPreviousIcon />
                    </div>

                    <div className="play-icon" onClick={changePlayingStateOfTrack}>
                        {playerState ? <PauseCircleIcon /> : <PlayCircleIcon />}
                    </div>

                    <div className="next-icon" onClick={() => changeTrack('next')}>
                        <SkipNextIcon />
                    </div>
                </div>

                <div className="progress-bar"></div>
            </div>

            <div className="track-volume-controls"></div>
        </div>
    )
}

export default Player;
