import React, { useContext } from 'react';
import './main-navbar.style.scss';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UserContext } from '../../context/user-context';
import { signUserIn } from '../../utils/spotify-functions';

function MainNavbar() {
    const { user } = useContext(UserContext);

    const signInhandler = () => {
        signUserIn();
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
