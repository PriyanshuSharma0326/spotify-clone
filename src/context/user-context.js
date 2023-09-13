import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => null
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const hash = window.location.hash;

        if(hash) {
            const token = hash.substring(1).split('&')[0].split('=')[1];
            setUser(token);
        }
    }, [user]);

    const contextValue = { user};

    return (
        <UserContext.Provider value={ contextValue }>
            { children }
        </UserContext.Provider>
    )
}
