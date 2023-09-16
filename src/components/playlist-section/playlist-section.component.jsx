import React, { useContext } from 'react';
import './playlist-section.style.scss';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import TrackCard from '../track-card/track-card.component';
import { TokenContext } from '../../context/token-context';

function PlaylistSection({ playlistName, playlistTracks, playlistID }) {
    const navigate = useNavigate();

    const { hash } = useContext(TokenContext);

    const routeHandler = () => {
        navigate(`/playlist/${playlistID}/${hash}`);
    }

    return (
        <div className='playlist-section'>
            <div className="section-links">
                <Link to={`/playlist/${playlistID}/${hash}`} className='section-title'>
                    {playlistName}
                </Link>

                <Button 
                    buttonText='Show all' 
                    buttonType='noPaddingSmall' 
                    type='button' 
                    onClick={routeHandler} 
                />
            </div>

            <div className="playlists-container">
                {playlistTracks.slice(0, 5).map(playlistTrack => {
                    return (
                        <TrackCard 
                            key={playlistTrack.track.id} 
                            track={playlistTrack} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PlaylistSection;
