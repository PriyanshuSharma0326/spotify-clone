import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './context/user-context';
import { UserPlaylistsContextProvider } from './context/user-playlists';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <UserContextProvider>
                <UserPlaylistsContextProvider>
                    <App />
                </UserPlaylistsContextProvider>
            </UserContextProvider>
        </Router>
    </React.StrictMode>
);
