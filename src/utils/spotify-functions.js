import axios from "axios";

const signUserIn = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUrl = process.env.REACT_APP_REDIRECT_URI;
    const apiUrl = 'https://accounts.spotify.com/authorize';

    const scope = [
        'user-read-email',
        'user-read-private',
        'user-modify-playback-state',
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-position',
        'user-top-read',
        'playlist-read-private',
        'user-read-playback-state',
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_dialog=true`;
}

const getUserInfo = async (token) => {
    try {
        const response = await axios.get(
            "https://api.spotify.com/v1/me",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
    
        return response.data;
    }
    catch(err) {
        return;
    }
}

const getCurrentTrackInfo = async (token) => {
    try {
        const response = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
    
        const { item } = response.data;
        return item;
    }
    catch(err) {
        return;
    }
}

const getItemsFromPlaylist = async (token, playlists) => {
    const newItems = await Promise.all(playlists.map(async playlist => {
        const response = await axios.get(
            `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        const { items } = response.data;
        return { [playlist.name]: items, id: playlist.id };
    }));

    return newItems;
}

const getPlaylistsOfCurrentUser = async (token) => {
    const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists?limit=20&offset=0",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    const { items } = response.data;
    return items;
}

const getPlaybackState = async (token) => {
    const response = await axios.get(
        "https://api.spotify.com/v1/me/player",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    return response.data.is_playing;
}

const goToTrack = async (token, moveType) => {
    await axios.post(
        `https://api.spotify.com/v1/me/player/${moveType}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );
}

const changeTrackState = async (token, state) => {
    try{
        const response = await axios.put(
            `https://api.spotify.com/v1/me/player/${state}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response;
    }
    catch(err) {
        return;
    }
}

const playTrack = async (token, track) => {
    const context_uri = track.track.album.uri;
    const track_number = track.track.track_number;

    const response = await axios.put(
        `https://api.spotify.com/v1/me/player/play`,
        {
            context_uri: context_uri,
            offset: {
                position: track_number - 1,
            },
            position_ms: 0,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    return response;
}

const setVolume = async (token, val) => {
    try {
        const response = await axios.put(
            `https://api.spotify.com/v1/me/player/volume/?volume_percent=${val}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response;
    }
    catch(err) {
        return;
    }
}

export {
    signUserIn,
    getUserInfo,
    getCurrentTrackInfo,
    getItemsFromPlaylist,
    getPlaylistsOfCurrentUser,
    goToTrack,
    changeTrackState,
    getPlaybackState,
    playTrack,
    setVolume,
}
