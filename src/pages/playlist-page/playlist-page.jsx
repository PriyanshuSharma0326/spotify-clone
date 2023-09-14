import React, { useContext } from 'react';
import './playlist-page.style.scss';
import { useParams } from 'react-router-dom';
import { UserPlaylistsContext } from '../../context/user-playlists-context';
import { PlaylistItemsContext } from '../../context/playlist-items-context';
import MainNavbar from '../../components/main-navbar/main-navbar.component';
import TrackBar from '../../components/track-bar/track-bar.component';

function PlaylistPage() {
    const { playlistID } = useParams();

    const { userPlaylists } = useContext(UserPlaylistsContext);

    const playlist = userPlaylists.filter(playlist => playlist.id === playlistID)[0];

    const { playlistItems } = useContext(PlaylistItemsContext);

    const playlistObject = playlistItems.filter(item => item.id === playlist.id)[0];

    const tracks = playlistObject[playlist.name];

    console.log(tracks);

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
                        <span className="user">{playlist.owner.display_name}</span>

                        <span className="total-songs"> • {playlist.tracks.total} songs</span>
                    </div>
                </div>
            </div>

            <div className="track-list-container">
                <div className="track-list-header">Hello</div>

                <div className="track-list-table-header">
                    <h1 className="count-hash">#</h1>

                    <h1 className="title">Title</h1>

                    <h1 className="album-title">Album</h1>

                    <h1 className="date">Date Added</h1>

                    <div className="time-icon">i</div>
                </div>

                <div className="track-list">
                    {tracks.map((track, index) => {
                        return (
                            <TrackBar 
                                key={track.id} 
                                track={track} 
                                index={index+1} 
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage;
