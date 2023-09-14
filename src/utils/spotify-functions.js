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

export {
    signUserIn
}
