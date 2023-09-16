import React, { createContext, useRef, useState } from "react";

export const StyleContext = createContext();

export const StyleContextProvider = ({ children }) => {
    const [darken, setDarken] = useState(false);
    const containerRef = useRef(null);

    const contextValue = { darken, setDarken, containerRef };

    return (
        <StyleContext.Provider value={ contextValue }>
            { children }
        </StyleContext.Provider>
    )
}
