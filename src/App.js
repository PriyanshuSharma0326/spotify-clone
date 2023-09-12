import React from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from './pages/shared-layout/shared-layout';
import Root from "./routes/root/root.route";
import AuthPage from "./routes/auth/authentication.route";
import LoginPage from "./pages/login-page/login-page";
import RegisterPage from "./pages/register-page/register-page";

function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Root />} />

                <Route path='playlist' element={<>A Playlist</>} />

                <Route path='section' element={<>Playlist Section</>} />

                <Route path='search' element={<>Search Section</>} />
            </Route>

            <Route path='/accounts' element={<AuthPage />}>
                <Route index element={<LoginPage />} />

                <Route path='login' element={<LoginPage />} />

                <Route path='register' element={<RegisterPage />} />
            </Route>
        </Routes>
    );
}

export default App;
