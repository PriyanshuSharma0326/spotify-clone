import React, { useContext } from 'react';
import './main-navbar.style.scss';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UserContext } from '../../context/user-context';
import { signUserIn } from '../../utils/spotify-functions';
import { StyleContext } from '../../context/style-context';

function MainNavbar() {
    const { user } = useContext(UserContext);

    const { darken } = useContext(StyleContext);

    const signInhandler = () => {
        signUserIn();
    }

    return (
        <div className={`main-navbar ${darken && 'navbar-black'}`}>
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
                <div className='user-info'>
                    {user.product === 'premium' && 
                    <div className="premium">
                        <h1>Premium</h1>
                    </div>}

                    <a className="user" href={`${user.external_urls.spotify}`} target='_blannk'>
                        <h1>{user.display_name}</h1>
                        <div className="user-image">
                            <img src={user.images[0].url} alt="" />
                        </div>
                    </a>
                </div>
            }
        </div>
    )
}

export default MainNavbar;
