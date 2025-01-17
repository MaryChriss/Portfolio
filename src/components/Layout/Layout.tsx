"use client";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useDarkMode } from "@/app/context/DarkModeContext";

interface LayoutProps {
    children: React.ReactNode;
    }

    export const Layout = ({ children }: LayoutProps) => {
    const { darkMode } = useDarkMode();

    return (
        <div className={darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}>
        <Header />
        <main>{children}</main>
        </div>
    );
};
