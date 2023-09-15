import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./token-context";
import { getPlaylistsOfCurrentUser } from "../utils/spotify-functions";

export const UserPlaylistsContext = createContext({
    userPlaylists: [],
    setUserPlaylists: () => []
});

export const UserPlaylistsContextProvider = ({ children }) => {
    const { token } = useContext(TokenContext);

    const [userPlaylists, setUserPlaylists] = useState([]);

    useEffect(() => {
        const getUserPlaylists = async () => {
            const response = await getPlaylistsOfCurrentUser(token);
            setUserPlaylists(response);
        }

        token && getUserPlaylists();
    }, [token]);

    const contextValue = { userPlaylists };

    return (
        <UserPlaylistsContext.Provider value={ contextValue }>
            { children }
        </UserPlaylistsContext.Provider>
    )
}
