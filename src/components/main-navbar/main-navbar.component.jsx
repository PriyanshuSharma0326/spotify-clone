import React, { useContext } from 'react';
import './main-navbar.style.scss';
// import Button from '../button/button.component';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UserContext } from '../../context/user-context';
// import { useNavigate } from 'react-router-dom';

function MainNavbar() {
    const { user } = useContext(UserContext);

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
            'user-top-read',
            'playlist-read-private',
        ];

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_dialog=true`;
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

            {!user ? 
                <button className='submit-button' type='button' onClick={signInhandler}>Sign in</button> : 
                <div className="user-image">
                    <img src={user.images[0].url} alt="" />
                </div>
            }
        </div>
    )
}

export default MainNavbar;
