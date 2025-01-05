"use client";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useState, useEffect } from "react";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleScroll = (id: string) => {
        const offsets: { [key: string]: number } = {
            home: 1000,
            "sobre-mim": 75,
            projetos: 80,
            contato: 79,
        };
        const div = document.getElementById(id);
        if (div) {
            const headerOffset = offsets[id] || 70;
            const elementPosition = div.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            setActiveSection(id);
        }

        setIsMenuOpen(false);
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
        if (typeof window !== "undefined") {
            document.documentElement.classList.toggle("dark", !isDarkMode);
        }
    };

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = ["home", "sobre-mim", "projetos", "contato"];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setActiveSection(id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const activeElement = document.querySelector(
            `#header-item-${activeSection}`
        ) as HTMLElement;

        if (activeElement) {
            const { offsetLeft, offsetWidth } = activeElement;
            setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeSection]);

    useEffect(() => {
        const handleResize = () => {
            const activeElement = document.querySelector(
                `#header-item-${activeSection}`
            ) as HTMLElement;

            if (activeElement) {
                const { offsetLeft, offsetWidth } = activeElement;
                setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activeSection]);

    return (
        <header
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] p-2 z-50 flex items-center justify-between rounded-full transition-all duration-300 ${
                isScrolled
                    ? "bg-white text-black shadow-xl"
                    : "bg-pink-100 text-black shadow-none"
            }`}
            style={{ marginTop: "10px" }}
        >

            <div className="hidden lg:flex relative flex gap-32">
                <span
                    className="absolute bottom-0 h-1 bg-pink-500/35 rounded-full transition-all duration-300"
                    style={{
                        left: `${indicatorStyle.left}px`,
                        width: `${indicatorStyle.width}px`,
                    }}
                />
                {["home", "sobre-mim", "projetos", "contato"].map((id) => (
                    <p
                        key={id}
                        id={`header-item-${id}`}
                        onClick={() => handleScroll(id)}
                        className={`relative cursor-pointer transition-colors ${
                            activeSection === id
                                ? "text-pink-500 font-bold"
                                : "hover:text-pink-500"
                        }`}
                    >
                        {id.toUpperCase().replace("-", " ")}
                    </p>
                ))}
            </div>

            <button
                className="lg:hidden flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}
            </button>

            <div
                className={`absolute top-16 left-0 w-full bg-pink-100 p-4 rounded-lg shadow-lg lg:hidden transition-all duration-300 ease-in-out
                    ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}
                `}
            >
                {["home", "sobre-mim", "projetos", "contato"].map((id) => (
                    <p
                        key={id}
                        onClick={() => handleScroll(id)}
                        className={`cursor-pointer text-center py-2 rounded-lg transition-colors ${
                            activeSection === id
                                ? "text-pink-500 font-bold"
                                : "hover:text-pink-500"
                        }`}
                    >
                        {id.toUpperCase().replace("-", " ")}
                    </p>
                ))}
            </div>

            <div className="flex gap-3">
                <a
                    href="https://github.com/MaryChriss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                >
                    <IoLogoGithub className="w-6 h-6" />
                </a>
                <a
                    href="https://www.linkedin.com/in/mariana-fernandes-92690425a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                >
                    <IoLogoLinkedin className="w-6 h-6" />
                </a>
            </div>
        </header>
    );
};
