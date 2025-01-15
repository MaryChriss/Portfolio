"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface DarkModeContextProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    }

    const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

    export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
        </DarkModeContext.Provider>
    );
    };

    export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
};
