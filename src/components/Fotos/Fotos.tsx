"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwipeable } from "react-swipeable";

type FotosProps = {
    imagens: { src: string; alt: string }[];
};

export const Fotos = ({ imagens }: FotosProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
        );
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextImage,
        onSwipedRight: prevImage,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    if (imagens.length === 1) {
        //Quando for uma imagem só
        return (
        <div className="w-80 h-96 relative">
            <Image
            src={imagens[0].src}
            alt={imagens[0].alt}
            className="w-80 h-96 object-cover rounded-3xl absolute z-20"
            width={500}
            height={500}
            />
            <div className="w-80 h-96 bg-pink-900 opacity-65 rounded-3xl absolute m-7 z-10"></div>
        </div>
        );
    }

    // Para mais de uma
    return (
        <div
            {...handlers}
            className="w-80 h-96 relative"
            >
            <Image
                src={imagens[currentIndex].src}
                alt={imagens[currentIndex].alt}
                className="w-80 h-96 object-cover rounded-3xl transition-transform duration-500  absolute z-20"
                width={500}
                height={500}
            />
            <div className="w-80 h-96 bg-pink-900 opacity-65 rounded-3xl absolute m-7 z-10"></div>

            <button
                onClick={prevImage}
                className="absolute  z-30 left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
                aria-label="Voltar para a imagem anterior"
                title="Voltar para a imagem anterior" 
            >
                <IoIosArrowBack size="1.5rem" />
            </button>

            <button
                onClick={nextImage}
                className="absolute  z-30 right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
                aria-label="Avançar para a próxima imagem"
                title="Avançar para a próxima imagem" 
            >
                <IoIosArrowForward size="1.5rem" />
            </button>
        </div>
    );
};
