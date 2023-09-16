import React, { useContext, useEffect, useState } from 'react';
import './playlist-page.style.scss';
import { useParams } from 'react-router-dom';
import { UserPlaylistsContext } from '../../context/user-playlists-context';
import { PlaylistItemsContext } from '../../context/playlist-items-context';
import MainNavbar from '../../components/main-navbar/main-navbar.component';
import TrackBar from '../../components/track-bar/track-bar.component';
import AccessTime from '@mui/icons-material/AccessTime';

import { prominent } from 'color.js';
import { StyleContext } from '../../context/style-context';

function PlaylistPage() {
    const { playlistID } = useParams();

    const { userPlaylists } = useContext(UserPlaylistsContext);
    const { playlistItems } = useContext(PlaylistItemsContext);
    const [RGB, setRGB] = useState([]);

    const backGroundStyle = {background: `linear-gradient(0deg, rgba(10, 10, 10, 1) 0%, rgba(${RGB[0]}, ${RGB[1]}, ${RGB[2]}, 1) 100%)`};

    const playlist = userPlaylists.filter(playlist => playlist.id === playlistID)[0];

    const playlistObject = playlistItems.filter(item => item.id === playlist.id)[0];

    const tracks = playlistObject[playlist.name];

    useEffect(() => {
        const getProminentcolor = async () => {
            const color = await prominent(playlist.images[0].url, { amount: 1 });
            setRGB(color);
        }

        getProminentcolor();
    }, [playlist.images]);

    const { containerRef, setDarken } = useContext(StyleContext);

    const container = containerRef.current;
    console.log(container);

    const transitionNavbar = () => {
        if(container?.scrollTop > 175) {
            setDarken(true);
        }
        else {
            setDarken(false);
        }
    }

    useEffect(() => {
        container?.addEventListener('scroll', transitionNavbar);

        return () => {
            container?.removeEventListener('scroll', transitionNavbar);
        }
    }, )

    return (
        <div className='playlist-page-container' ref={containerRef}>
            <MainNavbar />

            <div 
                className="playlist-banner-container" 
                style={backGroundStyle} 
            >
                <div className="playlist-banner">
                    <div className="playlist-image-container">
                        <img src={playlist.images[0].url} alt={playlist.name} />
                    </div>

                    <div className="playlist-data-container">
                        <h2 className="list-type">{playlist.type.charAt(0).toUpperCase() + playlist.type.slice(1)}</h2>

                        <h1 className="playlist-name">{playlist.name}</h1>

                        {playlist.description && <p className="playlist-description">{playlist.description}</p>}

                        <div className="playlist-by">
                            <span className="user">{playlist.owner.display_name}</span>

                            <span className="total-songs"> • {playlist.tracks.total} songs</span>
                        </div>
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

                    <div className="time-icon">
                        <AccessTime />
                    </div>
                </div>

                <div className="track-list">
                    {tracks.map((track, index) => {
                        return (
                            <TrackBar 
                                key={track.track.id} 
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
