import React from 'react';
import './sidebar-nav.style.scss';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation } from 'react-router-dom';

function SidebarNav() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="sidebar-nav-section">
            <Link to='/' className={`sidebar-nav-link ${path === '/' && 'active'}`}>
                <HomeIcon />

                <h1 className="sidebar-link-text">Home</h1>
            </Link>

            <Link to='/search' className={`sidebar-nav-link ${path === '/search' && 'active'}`}>
                <SearchIcon />

                <h1 className="sidebar-link-text">Search</h1>
            </Link>
        </div>
    )
}

export default SidebarNav;
