import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Root from '../root/root.route';
import PlaylistPage from '../../pages/playlist-page/playlist-page';

function Playlist() {
    return (
        <Routes>
            <Route index element={<Root />} />

            <Route 
                path=':playlistID' 
                element={<PlaylistPage />} 
            />
        </Routes>
    )
}

export default Playlist;
