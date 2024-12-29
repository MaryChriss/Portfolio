"use client";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export const Header = () => {

    const handleScroll = (id: string) => {
        const div = document.getElementById(id);
        if (div) {
            div.scrollIntoView({ behavior: "smooth"})
        }
    };
    
    return (
        <header className="fixed top-0 left-0 w-full bg-pink-100 flex items-center gap-52 justify-center p-3 text-black shadow-lg font-abel z-50">
            <div className="flex gap-32 mr-28">
                <p onClick={() => handleScroll("home")}
                    className="cursor-pointer hover:text-pink-500 transition-colors">
                    HOME
                </p>

                <p onClick={() => handleScroll("sobre-mim")}
                    className="cursor-pointer hover:text-pink-500 transition-colors">
                    SOBRE MIM
                </p>

                <p onClick={() => handleScroll("projetos")}
                    className="cursor-pointer hover:text-pink-500 transition-colors">
                    PROJETOS
                </p>

                <p onClick={() => handleScroll("contato")}
                    className="cursor-pointer hover:text-pink-500 transition-colors">
                    CONTATO
                </p>

            </div>

            <div className="flex gap-3">
                <a
                    href="https://github.com/MaryChriss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                >
                    <IoLogoGithub className="w-6 h-6" />
                </a>

                <a
                    href="https://www.linkedin.com/in/mariana-fernandes-92690425a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                >
                    <IoLogoLinkedin className="w-6 h-6" />
                </a>
            </div>
        </header>
    );
};
