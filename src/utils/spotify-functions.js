import axios from "axios";

const signUserIn = () => {
    const clientId = 'f052378c9b7d4002b7254faa708ce08a';
    const redirectUrl = 'http://localhost:3000/';
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
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_dialog=true`;
}

const getUserInfo = async (token) => {
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

const getCurrentTrackInfo = async (token) => {
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
    await axios.put(
        `https://api.spotify.com/v1/me/player/${state}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );
}

export {
    signUserIn,
    getUserInfo,
    getCurrentTrackInfo,
    getItemsFromPlaylist,
    getPlaylistsOfCurrentUser,
    goToTrack,
    changeTrackState,
}
