import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./token-context";
import { UserPlaylistsContext } from "./user-playlists-context";
import { getItemsFromPlaylist } from "../utils/spotify-functions";

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
            const updatedItems = await getItemsFromPlaylist(token, userPlaylists);
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
