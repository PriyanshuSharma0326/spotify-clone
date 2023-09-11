import React from 'react';
import './shared-layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar.component';
import Footer from '../../components/footer/footer.component';

function SharedLayout() {
    return (
        <div className='shared-layout'>
            <div className="app-main">
                <Sidebar />

                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default SharedLayout;
