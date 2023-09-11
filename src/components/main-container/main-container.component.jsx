import React from 'react';
import './main-container.style.scss';
import MainNavbar from '../main-navbar/main-navbar.component';
import PlaylistSection from '../playlist-section/playlist-section.component';

function MainContainer() {
    return (
        <div className='main-container'>
            <MainNavbar />

            <div className="playlists-list">
                <PlaylistSection />
            </div>
        </div>
    )
}

export default MainContainer;
