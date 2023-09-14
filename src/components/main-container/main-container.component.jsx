import React, { useContext } from 'react';
import './main-container.style.scss';
import MainNavbar from '../main-navbar/main-navbar.component';
import PlaylistSection from '../playlist-section/playlist-section.component';
import { PlaylistItemsContext } from '../../context/playlist-items-context';

function MainContainer() {
    const { playlistItems } = useContext(PlaylistItemsContext);

    return (
        <div className='main-container'>
            <MainNavbar />

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
                }) : <></>
                }
            </div>
        </div>
    )
}

export default MainContainer;
