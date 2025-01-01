"use client";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { useState, useEffect } from "react";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

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
                        setActiveSection(entry.target.id);
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

    return (
        <header
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] p-2 z-50 flex items-center justify-between rounded-full transition-all duration-300 ${
                isScrolled
                    ? "bg-white text-black shadow-xl"
                    : "bg-pink-100 text-black shadow-none"
            }`}
            style={{ marginTop: "10px" }}
        >
            <div
                className="relative flex gap-32 
                xs:text-xs xs:gap-1
                xmd:gap-2
                xlg:gap-7
                sm:text-xs sm:gap-7 sm:ml-6
                md:gap-7 md:ml-9
                lg:gap-32 
                xl:gap-32 
                2xl:gap-32"
            >
                {/* Indicador móvel */}
                <span
                    className="absolute bottom-0 h-1 bg-pink-500/35 rounded-full transition-all duration-300"
                    style={{
                        position: "absolute",
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
                        }
                        
                        sm:text-xs 
                        md:text-xs 
                        lg:text-sm 
                        xl:text-base 
                        2xl:text-base`}
                    >
                        {id.toUpperCase().replace("-", " ")}
                    </p>
                ))}
            </div>

            <div
                className="flex gap-3 
                xs:gap-0
                xmd:gap-1
                xlg:gap-1
                sm:gap-1 
                md:gap-3 
                lg:gap-3 
                xl:gap-3 
                2xl:gap-3"
            >
                <a
                    href="https://github.com/MaryChriss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600
                        xs:w-8 xs:h-8
                        xmd:w-10 xmd:h-10
                        xlg:w-10 xlg:h-10
                        sm:w-10 sm:h-10 
                        md:w-10 md:h-10 
                        lg:w-10 lg:h-10
                        xl:w-10 xl:h-10
                        2xl:w-10 2xl:h-10
                    "
                >
                    <IoLogoGithub className="w-6 h-6" />
                </a>

                <a
                    href="https://www.linkedin.com/in/mariana-fernandes-92690425a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600
                        xs:w-8 xs:h-8
                        xmd:w-10 xmd:h-10
                        xlg:w-10 xlg:h-10
                        sm:w-10 sm:h-10 
                        md:w-10 md:h-10 
                        lg:w-10 lg:h-10
                        xl:w-10 xl:h-10
                        2xl:w-10 2xl:h-10
                    "
                >
                    <IoLogoLinkedin className="w-6 h-6" />
                </a>
            </div>
        </header>
    );
};
