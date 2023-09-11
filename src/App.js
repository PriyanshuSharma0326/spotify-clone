import React from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from './routes/shared-layout/shared-layout';
import Root from "./routes/root/root.route";

function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Root />} />

                <Route path='playlist' element={<>A Playlist</>} />

                <Route path='section' element={<>Playlist Section</>} />

                <Route path='search' element={<>Search Section</>} />
            </Route>

            <Route path='/accounts'>
                <Route index element={<>Account Page</>} />

                <Route path='login' element={<>login</>} />

                <Route path='register' element={<>Register</>} />
            </Route>
        </Routes>
    );
}

export default App;
