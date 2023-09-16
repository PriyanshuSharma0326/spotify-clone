import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./token-context";
import { getCurrentTrackInfo, getPlaybackState, setVolume } from "../utils/spotify-functions";

export const CurrentTrackContext = createContext();

export const CurrentTrackContextProvider = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [playerState, setPlayerState] = useState(false);

    const [audio, setAudio] = useState(60);

    const { token } = useContext(TokenContext);

    useEffect(() => {
        const getTrack = async () => {
            const res = await getCurrentTrackInfo(token);
            if(!res) {
                setCurrentTrack(null);
            }
            else if(res) {
                setCurrentTrack(res);
            }
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

    useEffect(() => {
        const setVolumeState = async () => {
            const res = await setVolume(token, audio);
            if (!res) {
                setCurrentTrack(null);
            }
        }

        token && setVolumeState();
    }, [token, audio]);

    const contextValue = {
        currentTrack,
        setCurrentTrack,
        setButtonClicked,
        playerState,
        setPlayerState,
        audio,
        setAudio,
    };

    return (
        <CurrentTrackContext.Provider value={ contextValue }>
            { children }
        </CurrentTrackContext.Provider>
    )
}
