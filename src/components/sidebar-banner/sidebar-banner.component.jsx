import React from 'react';
import './sidebar-banner.style.scss';
import Button from '../button/button.component';

function SidebarBanner({ title, desc, buttonText }) {
    return (
        <div className="banner">
            <h1>{title}</h1>

            <h2>{desc}</h2>

            <Button 
                buttonText={buttonText} 
                type='button' 
            />
        </div>
    );
}

export default SidebarBanner;
