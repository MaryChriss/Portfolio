"use client";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export const Header = () => {
    return (
        <header className="bg-pink-100 flex items-center gap-52 justify-center p-3 text-black shadow-lg font-abel">
            <div className="flex gap-32 mr-28">
                <p>HOME</p>
                <p>SOBRE MIM</p>
                <p>PROJETOS</p>
                <p>CONTATO</p>
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
    )
}