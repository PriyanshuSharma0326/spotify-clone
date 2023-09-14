import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import { TokenContextProvider } from './context/token-context';
import { UserPlaylistsContextProvider } from './context/user-playlists-context';
import { UserContextProvider } from './context/user-context';
import { PlaylistItemsContextProvider } from './context/playlist-items-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <TokenContextProvider>
                <UserContextProvider>
                    <UserPlaylistsContextProvider>
                        <PlaylistItemsContextProvider>
                            <App />
                        </PlaylistItemsContextProvider>
                    </UserPlaylistsContextProvider>
                </UserContextProvider>
            </TokenContextProvider>
        </Router>
    </React.StrictMode>
);
