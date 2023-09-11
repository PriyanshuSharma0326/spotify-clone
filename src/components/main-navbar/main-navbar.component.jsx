import React from 'react';
import './main-navbar.style.scss';
import Button from '../button/button.component';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function MainNavbar() {
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

            <div className="auth-buttons">
                <Button 
                    buttonText='Sign up' 
                    buttonType='noPadding' 
                    type='button' 
                />

                <Button 
                    buttonText='Log in' 
                    buttonType='big' 
                    type='button' 
                />
            </div>
        </div>
    )
}

export default MainNavbar;
