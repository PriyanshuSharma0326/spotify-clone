import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./token-context";
import { getUserInfo } from "../utils/spotify-functions";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
    user: null,
    setUser: () => null
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const { token } = useContext(TokenContext);

    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const res = await getUserInfo(token);
            if(!res) {
                navigate('/');
                window.location.reload();
            }
            else {
                setUser(res);
            }
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
