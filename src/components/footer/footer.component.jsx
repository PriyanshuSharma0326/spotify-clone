import React from 'react';
import './footer.style.scss';
import Button from '../button/button.component';

function Footer() {
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
            />
        </div>
    )
}

export default Footer;
