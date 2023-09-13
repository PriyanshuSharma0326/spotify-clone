import React from 'react';
import './main-navbar.style.scss';
import Button from '../button/button.component';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { useNavigate } from 'react-router-dom';

function MainNavbar() {
    // const navigate = useNavigate();

    const signInhandler = () => {
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
            'user-top-read'
        ];

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_dialog=true`;
        // console.log(`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_dialog=true`);
    }

    return (
        <div className="main-navbar">
            <div className="navigation-buttons-container">
                <button className='navigation-button'>
                    <ChevronLeftIcon />
                </button>

                <button className='navigation-button'>
                    <ChevronRightIcon />
                </button>
            </div>

            <button className='submit-button' type='button' onClick={signInhandler}>
                Sign in
            </button>
        </div>
    )
}

export default MainNavbar;
