import React, { createContext, useEffect, useState } from "react";

export const TokenContext = createContext({
    token: null,
    setToken: () => null
});

export const TokenContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const [hash, setHash] = useState(null);

    useEffect(() => {
        const hash = window.location.hash;
        setHash(hash);

        if(hash) {
            const token = hash.substring(1).split('&')[0].split('=')[1];
            setToken(token);
        }
    }, [token]);

    const contextValue = { token, hash };

    return (
        <TokenContext.Provider value={ contextValue }>
            { children }
        </TokenContext.Provider>
    )
}
