import React from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from './pages/shared-layout/shared-layout';
import Root from "./routes/root/root.route";
import Playlist from "./routes/playlist/playlist.route";
import Error from "./routes/error/error.route";

function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Root />} />

                <Route path='playlist/*' element={<Playlist />} />

                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
}

export default App;
