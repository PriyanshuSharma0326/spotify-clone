import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { TokenContext } from "./token-context";

export const UserContext = createContext({
    user: null,
    setUser: () => null
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const { token } = useContext(TokenContext);

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            setUser(response.data);
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
