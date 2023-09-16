import React, { useContext } from 'react';
import './sidebar-nav.style.scss';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';
import { TokenContext } from '../../context/token-context';

function SidebarNav() {
    const location = useLocation();
    const path = location.pathname;

    const { hash } = useContext(TokenContext);

    return (
        <div className="sidebar-nav-section">
            <Link to={`/${hash}`} className={`sidebar-nav-link ${path === '/' && 'active'}`}>
                <HomeIcon />

                <h1 className="sidebar-link-text">Home</h1>
            </Link>
        </div>
    )
}

export default SidebarNav;
