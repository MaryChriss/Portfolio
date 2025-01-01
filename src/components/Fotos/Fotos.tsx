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
        <div className="w-80 h-96 relative
            xs:w-64 xs:h-72
            xmd:w-72 xmd:h-80
            xlg:w-72 xlg:h-80
            sm:w-80 sm:h-96 
            md:w-80 md:h-96
            lg:w-80 lg:h-96
            xl:w-72 xl:h-80
            2xl:w-80 2xl:h-96
        ">
            <Image
            src={imagens[0].src}
            alt={imagens[0].alt}
            className="w-80 h-96 object-cover rounded-3xl absolute z-20
            xs:w-64 xs:h-72
            xmd:w-72 xmd:h-80
            xlg:w-72 xlg:h-80
            sm:w-80 sm:h-96 
            md:w-80 md:h-96
            lg:w-80 lg:h-96
            xl:w-72 xl:h-80
            2xl:w-80 2xl:h-96
            "
            width={500}
            height={500}
            />
            <div className="w-80 h-96 bg-pink-900 opacity-65 rounded-3xl absolute m-7 z-10
            xs:w-64 xs:h-72
            xmd:w-72 xmd:h-80
            xlg:w-72 xlg:h-80
            sm:w-80 sm:h-96 
            md:w-80 md:h-96
            lg:w-80 lg:h-96
            xl:w-72 xl:h-80
            2xl:w-80 2xl:h-96
            "></div>
        </div>
        );
    }

    // Para mais de uma
    return (
        <div
            {...handlers}
            className="w-80 h-96 relative
            xs:w-64 xs:h-72
            xmd:w-72 xmd:h-80
            xlg:w-72 xlg:h-80
            sm:w-80 sm:h-96 
            md:w-80 md:h-96
            lg:w-80 lg:h-96
            xl:w-72 xl:h-80
            2xl:w-80 2xl:h-96"
            >
            <Image
                src={imagens[currentIndex].src}
                alt={imagens[currentIndex].alt}
                className="w-80 h-96 object-cover rounded-3xl transition-transform duration-500  absolute z-20
                xs:w-64 xs:h-72
                xmd:w-72 xmd:h-80
                xlg:w-72 xlg:h-80
                sm:w-80 sm:h-96 
                md:w-80 md:h-96
                lg:w-80 lg:h-96
                xl:w-72 xl:h-80
                2xl:w-80 2xl:h-96
                "
                width={500}
                height={500}
            />
            <div className="w-80 h-96 bg-pink-900 opacity-65 rounded-3xl absolute m-7 z-10
            xs:w-64 xs:h-72
            xmd:w-72 xmd:h-80
            xlg:w-72 xlg:h-80
            sm:w-80 sm:h-96
            md:w-80 md:h-96 
            lg:w-80 lg:h-96
            xl:w-72 xl:h-80
            2xl:w-80 2xl:h-96
            "></div>

            <button
                onClick={prevImage}
                className="absolute z-30 left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black
                xs:p-2
                xmd:p-2
                xlg:p-2
                sm:p-2
                md:p-2
                lg:p-2
                xl:p-2
                2xl:p-2
                "
                aria-label="Voltar para a imagem anterior"
                title="Voltar para a imagem anterior" 
            >
                <IoIosArrowBack size="1.5rem" />
            </button>

            <button
                onClick={nextImage}
                className="absolute  z-30 right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black
                xs:right-1
                xmd:right-10
                xlg:right-10
                sm:p-2 sm:right-3
                md:p-2
                lg:p-2
                xl:p-2 xl:right-10
                2xl:p-2
                "
                aria-label="Avançar para a próxima imagem"
                title="Avançar para a próxima imagem" 
            >
                <IoIosArrowForward size="1.5rem" />
            </button>
        </div>
    );
};
