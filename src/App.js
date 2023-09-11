import React from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from './routes/shared-layout/shared-layout';

function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<>App</>} />

                <Route path='playlist' element={<>A Playlist</>} />
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
