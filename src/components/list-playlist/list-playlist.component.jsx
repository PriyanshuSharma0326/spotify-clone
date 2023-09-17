import React, { useContext } from 'react';
import './list-playlist.style.scss';
import PlaylistBar from '../playlist-bar/playlist-bar.component';
import { UserPlaylistsContext } from '../../context/user-playlists-context';

function ListPlaylist() {
    const { userPlaylists } = useContext(UserPlaylistsContext);

    return (
        <>
            {userPlaylists ? <div className='list-playlist'>
                {userPlaylists.map(playlist => {
                    return (
                        <PlaylistBar 
                            key={playlist.id} 
                            playlistName={playlist.name} 
                            imageURL={playlist.images[0].url} 
                            totalSongs={playlist.tracks.total} 
                            playlistID={playlist.id} 
                        />
                    )
                })}
            </div> : 
            <div className="no-playlists">
                <h1>No playlist available</h1>
                <p>Add some playlists to continue</p>
            </div>
            }
        </>
    )
}

export default ListPlaylist;
