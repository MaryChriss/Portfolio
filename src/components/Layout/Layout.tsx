"use client"; // Marca esse componente como client-side

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
