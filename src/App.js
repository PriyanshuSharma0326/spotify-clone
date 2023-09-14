import React from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from './pages/shared-layout/shared-layout';
import Root from "./routes/root/root.route";
import Playlist from "./routes/playlist/playlist.route";

function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Root />} />

                <Route path='playlist/*' element={<Playlist />} />

                <Route path='search' element={<>Search Section</>} />
            </Route>
        </Routes>
    );
}

export default App;
