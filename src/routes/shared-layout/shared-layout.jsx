import React from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
    return (
        <div>
            <h1>Sidebar</h1>

            <Outlet />
        </div>
    )
}

export default SharedLayout;
