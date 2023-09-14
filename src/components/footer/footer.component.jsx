import React from 'react';
import './footer.style.scss';
import Button from '../button/button.component';
import { signUserIn } from '../../utils/spotify-functions';

function Footer() {
    const signInhandler = () => {
        signUserIn();
    }

    return (
        <div className='footer'>
            <div className="footer-content">
                <h1>preview of spotify</h1>

                <p>Sign in to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>

            <Button 
                buttonText='Sign in here' 
                type='button' 
                buttonType='big' 
                onClick={signInhandler}
            />
        </div>
    )
}

export default Footer;
