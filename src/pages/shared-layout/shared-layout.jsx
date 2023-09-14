import React, { useContext } from 'react';
import './shared-layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar.component';
import Footer from '../../components/footer/footer.component';
import { UserContext } from '../../context/user-context';
import Player from '../../components/player/player.component';

function SharedLayout() {
    const { user } = useContext(UserContext);

    return (
        <div className='shared-layout'>
            <div className="app-main">
                <Sidebar />

                <Outlet />
            </div>

            {!user ? <Footer /> : <Player />}
        </div>
    )
}

export default SharedLayout;
