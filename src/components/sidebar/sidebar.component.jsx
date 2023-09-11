import React from 'react';
import './sidebar.style.scss';
import SidebarNav from '../sidebar-nav/sidebar-nav.component';
import SidebarLibrarySection from '../sidebar-library-section/sidebar-library-section.component';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarNav />

            <SidebarLibrarySection />
        </div>
    )
}

export default Sidebar;
