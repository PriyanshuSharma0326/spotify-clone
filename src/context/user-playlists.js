import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./user-context";
import axios from "axios";

export const UserPlaylistsContext = createContext({
    userPlaylists: {},
    setUserPlaylists: () => {}
});

export const UserPlaylistsContextProvider = ({ children }) => {
    const { user } = useContext(UserContext);

    const [userPlaylists, setUserPlaylists] = useState({});

    useEffect(() => {
        const getUserPlaylists = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists",
                {
                    headers: {
                        Authorization: "Bearer " + user,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data);
        }

        user && getUserPlaylists();
    }, [user]);

    const contextValue = { userPlaylists };

    return (
        <UserPlaylistsContext.Provider value={ contextValue }>
            { children }
        </UserPlaylistsContext.Provider>
    )
}
