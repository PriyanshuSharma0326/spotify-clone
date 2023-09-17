import React, { useContext } from 'react';
import './main-container.style.scss';
import MainNavbar from '../main-navbar/main-navbar.component';
import PlaylistSection from '../playlist-section/playlist-section.component';
import { PlaylistItemsContext } from '../../context/playlist-items-context';
import { UserContext } from '../../context/user-context';

function MainContainer() {
    const { playlistItems } = useContext(PlaylistItemsContext);

    const { user } = useContext(UserContext);

    return (
        <div className='main-container'>
            {user ? 
                <MainNavbar /> : 
                <div className="hint-text">
                    <h1>No playlists to show.</h1>

                    <p>Sign in to Continue listening to your favorite songs.</p>
                </div>
            }

            <div className="playlists-list">
                {playlistItems ? playlistItems.map(playlist => {
                    return (
                        <PlaylistSection 
                            key={playlist.id} 
                            playlistName={Object.keys(playlist)[0]} 
                            playlistTracks={playlist[Object.keys(playlist)[0]]} 
                            playlistID={playlist.id} 
                        />
                    )
                }) : 
                <div className='no-playlist'>
                    <h1>Looks like you don't have any playlists in your Spotify account</h1>
                    <p>Add some playlists in your spotify account to continue</p>
                </div>
                }
            </div>
        </div>
    )
}

export default MainContainer;
