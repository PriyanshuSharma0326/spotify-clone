import React, { useContext } from 'react';
import './sidebar-library-section.style.scss';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';

import SidebarBanner from '../sidebar-banner/sidebar-banner.component';
import SidebarLinks from '../sidebar-links/sidebar-links.component';
import { UserContext } from '../../context/user-context';
import ListPlaylist from '../list-playlist/list-playlist.component';

function SidebarLibrarySection() {
    const { user } = useContext(UserContext);

    return (
        <div className='sidebar-library-section'>
            <li className='sidebar-nav-link'>
                <div className="link-content">
                    <PlaylistPlayIcon />
                    <h1 className="sidebar-link-text">Your Library</h1>
                </div>

                <button type='button' className='add-playlist-button'>
                    <AddIcon />
                </button>
            </li>

            {!user && <div className="library-no-login-content">
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
            </div>}

            {user && <ListPlaylist />}
        </div>
    )
}

export default SidebarLibrarySection;
