import React from 'react';
import './shared-layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar.component';

function SharedLayout() {
    return (
        <div className='shared-layout'>
            <div className="app-main">
                <Sidebar />

                <Outlet />
            </div>

            <h3>Footer</h3>
        </div>
    )
}

export default SharedLayout;
