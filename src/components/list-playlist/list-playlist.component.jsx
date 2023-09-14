import React, { useContext } from 'react';
import './list-playlist.style.scss';
import PlaylistBar from '../playlist-bar/playlist-bar.component';
import { UserPlaylistsContext } from '../../context/user-playlists-context';

function ListPlaylist() {
    const { userPlaylists } = useContext(UserPlaylistsContext);

    return (
        <div className='list-playlist'>
            {userPlaylists.map(playlist => {
                return (
                    <PlaylistBar 
                        key={playlist.id} 
                        playlistName={playlist.name} 
                        imageURL={playlist.images[0].url} 
                        totalSongs={playlist.tracks.total} 
                    />
                )
            })}
        </div>
    )
}

export default ListPlaylist;
