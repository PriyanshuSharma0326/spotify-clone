import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./token-context";
import axios from "axios";

export const UserPlaylistsContext = createContext({
    userPlaylists: [],
    setUserPlaylists: () => []
});

export const UserPlaylistsContextProvider = ({ children }) => {
    const { token } = useContext(TokenContext);

    const [userPlaylists, setUserPlaylists] = useState([]);

    useEffect(() => {
        const getUserPlaylists = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists?limit=20&offset=0",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const { items } = response.data;
            setUserPlaylists(items);
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
