import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./token-context";
import { getCurrentTrackInfo, getPlaybackState } from "../utils/spotify-functions";

export const CurrentTrackContext = createContext();

export const CurrentTrackContextProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [playerState, setPlayerState] = useState(false);

    const { token } = useContext(TokenContext);

    useEffect(() => {
        const getTrack = async () => {
            const track = await getCurrentTrackInfo(token);
            setCurrentTrack(track);
        }
        
        token && getTrack();
        setButtonClicked(false);
    }, [token, buttonClicked]);

    useEffect(() => {
        const getTrackStatus = async () => {
            const status = await getPlaybackState(token);
            setPlayerState(status);
        }

        token && getTrackStatus();
    }, [token]);

    const contextValue = {
        currentTrack,
        setCurrentTrack,
        setButtonClicked,
        playerState,
        setPlayerState,
    };

    return (
        <CurrentTrackContext.Provider value={ contextValue }>
            { children }
        </CurrentTrackContext.Provider>
    )
}
