import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./token-context";
import axios from "axios";
import { UserPlaylistsContext } from "./user-playlists-context";

export const PlaylistItemsContext = createContext({
    playlistItems: [],
    setPlaylistItems: () => []
});

export const PlaylistItemsContextProvider = ({ children }) => {
    const { token } = useContext(TokenContext);
    const { userPlaylists } = useContext(UserPlaylistsContext);

    const [playlistItems, setPlaylistItems] = useState([]);

    useEffect(() => {
        const getPlaylistItems = async () => {
            const updatedItems = await Promise.all(userPlaylists.map(async playlist => {
                const response = await axios.get(
                    `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                const { items } = response.data;
                return { [playlist.name]: items, id: playlist.id };
            }));
            setPlaylistItems(prevItems => [...prevItems, ...updatedItems]);
        }

        token && getPlaylistItems();
    }, [token, userPlaylists]);

    const contextValue = { playlistItems };

    return (
        <PlaylistItemsContext.Provider value={ contextValue }>
            { children }
        </PlaylistItemsContext.Provider>
    )
}
