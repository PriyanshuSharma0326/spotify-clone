import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./token-context";
import { getUserInfo } from "../utils/spotify-functions";

export const UserContext = createContext({
    user: null,
    setUser: () => null
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const { token } = useContext(TokenContext);

    useEffect(() => {
        const getUser = async () => {
            const userInfo = await getUserInfo(token);
            setUser(userInfo);
        }

        token && getUser();
    }, [token]);

    const contextValue = { user };

    return (
        <UserContext.Provider value={ contextValue }>
            { children }
        </UserContext.Provider>
    )
}
