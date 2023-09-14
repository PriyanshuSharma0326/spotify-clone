import React, { useContext } from 'react';
import './playlist-page.style.scss';
import { useParams } from 'react-router-dom';
import { UserPlaylistsContext } from '../../context/user-playlists-context';
import MainNavbar from '../../components/main-navbar/main-navbar.component';

function PlaylistPage() {
    const { playlistID } = useParams();

    const { userPlaylists } = useContext(UserPlaylistsContext);

    const playlist = userPlaylists.filter(playlist => playlist.id === playlistID)[0];

    return (
        <div className='playlist-page-container'>
            <MainNavbar />

            <div className="playlist-banner">
                <div className="playlist-image-container">
                    <img src={playlist.images[0].url} alt={playlist.name} />
                </div>

                <div className="playlist-data-container">
                    <h2 className="list-type">{playlist.type}</h2>

                    <h1 className="playlist-name">{playlist.name}</h1>

                    <p className="playlist-description">{playlist.description}</p>

                    <div className="playlist-by">
                        <span className="user">{playlist.owner.display_name} </span>

                        <span className="total-songs"> • {playlist.tracks.total} songs</span>
                    </div>
                </div>
            </div>

            <div className="track-list">
                Playlist songs
            </div>
        </div>
    )
}

export default PlaylistPage;
