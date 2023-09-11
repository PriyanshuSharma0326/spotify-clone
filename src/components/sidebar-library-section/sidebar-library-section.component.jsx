import React from 'react';
import './sidebar-library-section.style.scss';
import { Link } from 'react-router-dom';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';

import SidebarBanner from '../sidebar-banner/sidebar-banner.component';
import SidebarLinks from '../sidebar-links/sidebar-links.component';

function SidebarLibrarySection() {
    return (
        <div className='sidebar-library-section'>
            <Link className='sidebar-nav-link'
                // to='/' className={`sidebar-nav-link ${path === '/' && 'active'}`}
            >
                <div className="link-content">
                    <PlaylistPlayIcon />
                    <h1 className="sidebar-link-text">Your Library</h1>
                </div>

                <button type='button' className='add-playlist-button'>
                    <AddIcon />
                </button>
            </Link>

            <div className="library-section-banners">
                <SidebarBanner 
                    title='Create your first playlist' 
                    desc="It's easy, we'll help you" 
                    buttonText='Create playlist' 
                />

                <SidebarBanner 
                    title="Let's find some podcasts to follow" 
                    desc="We'll keep you updated on new episodes" 
                    buttonText='Browse podcasts' 
                />
            </div>

            <SidebarLinks />

            <button className='language-button'>
                <LanguageIcon />
                English
            </button>
        </div>
    )
}

export default SidebarLibrarySection;
