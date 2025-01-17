"use client";

import { CardProjeto } from "@/components/CardProjeto/CardProjeto";
import { Footer } from "@/components/Footer/Footer";
import { Layout } from "@/components/Layout/Layout";
import { useRouter } from "next/navigation";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { RiJavaLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";

export default function BrainDrive() {
    const { darkMode } = useDarkMode();
    const router = useRouter();
    
    return(
        <Layout>

            <div className="flex justify-center gap-48 mb-11 
            xs:flex-col xs:gap-7 xs:p-5
            xmd:flex-col xmd:gap-10 xmd:p-7
            xlg:flex-col xlg:gap-8 xlg:p-10
            sm:flex-col sm:gap-20
            md:flex-col md:p-16
            lg:flex-row lg:gap-6
            xl:flex-row
            2xl:flex-row 2xl:gap-60 2xl:p-0
            ">

                <div className="mt-24 flex justify-start mr-20 -ml-36
                xs:ml-0 xs:p-6 xs:
                xmd:ml-0 xmd:p-6
                xlg:ml-0 xlg:p-6
                sm:ml-0 sm:p-6
                md:ml-0 md:p-6
                lg:ml-0 lg:p-0
                xl:mt-24 xl:justify-start
                2xl:mt-24 2xl:justify-start 2xl:mr-20 2xl:-ml-36
                ">
                    <FaCircleArrowLeft className="cursor-pointer text-pink-800 hover:text-pink-700" size={35} onClick={() => router.push('/#projetos')} />
                </div>

                <div className="flex flex-col justify-center mt-24 gap-16
                xs:ml-0 xs:-mt-0
                xmd:mt-0
                xlg:mt-0
                sm:mt-0
                md:ml-0 
                lg:ml-0
                xl:flex-col xl:justify-center xl:mt-24 xl:gap-16
                2xl:flex-col 2xl:justify-center 2xl:mt-24 2xl:gap-16
                ">

                    <div className="ml-0
                    xs:flex xs:justify-center
                    xmd:flex xmd:justify-center
                    xlg:flex xlg:justify-center
                    sm:flex sm:justify-center 
                    md:ml-0 
                    lg:ml-0
                    xl:ml-0 
                    2xl:ml-0
                    ">
                        <CardProjeto
                            src="/brainDrive.jpeg"
                            alt="Imagem do Brain Drive"
                            titulo="Brain Drive"
                            descricao="Diagnóstico Automotivo"
                            link={''}
                        />
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="https://sprint4-frontend-qsvg.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center w-48 h-12 bg-pink-200 text-black font-abel font-semibold rounded-full hover:bg-pink-300 transition-colors duration-600 shadow-md
                                ${ darkMode ? "bg-pink-600 text-white hover:bg-pink-700" : "bg-pink-200"}`}
                            > Visite o projeto! </a>
                    </div>
                </div>

                <div className="mt-24 ml-11
                xs:mt-0 xs:m-0
                xmd:mt-0
                xlg:mt-0
                sm:mt-0
                md:mt-0 
                lg:mt-24 lg:ml-11
                xl:mt-24 xl:ml-11 
                2xl:mt-24 2xl:ml-11 
                ">

                    <div className="mt-10">
                        <h1 className="text-4xl font-abel
                            xs:text-xl
                            xmd:text-xl
                            xlg:text-2xl
                            sm:text-2xl
                            md:text-3xl
                            lg:text-3xl
                            xl:text-3xl
                            2xl:text-4xl
                        ">DETALHES DO PROJETO</h1>
                    </div>

                    <div>

                        <div className="mt-14">
                            <h2 className="text-4xl text-pink-800 font-abel mb-3
                            xs:text-xl
                            xmd:text-xl
                            xlg:text-2xl
                            sm:text-2xl
                            md:text-3xl
                            lg:text-3xl
                            xl:text-3xl
                            2xl:text-4xl
                            ">- Brain Drive </h2>

                            <p className="font-abel mb-11
                                xs:text-sm
                                xmd:text-sm
                                xlg:text-base
                                sm:text-base
                                md:text-base
                                lg:text-base
                                xl:text-base
                                2xl:text-base
                            ">
                            Este projeto é um sistema web de diagnóstico automotivo utilizando inteligência artificial (IA) <br/>
                            para auxiliar os usuários a identificarem problemas nos seus veículos de forma simples e rápida.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-4
                                xs:text-xl
                                xmd:text-xl
                                xlg:text-2xl
                                sm:text-2xl
                                md:text-3xl
                                lg:text-3xl
                                xl:text-3xl
                                2xl:text-4xl
                            ">Tecnologias Utilizadas:</h2>

                            <ul className={`list-disc list-inside text-gray-800
                                xs:text-sm
                                xmd:text-sm
                                xlg:text-base
                                sm:text-base
                                md:text-base
                                lg:text-base
                                xl:text-base
                                2xl:text-base
                                ${ darkMode ? "text-white" : "text-gray-800"}`}
                            >
                                <li>Next.js 13</li>
                                <li>Java</li>
                                <li>Oracle SQL</li>
                                <li>TypeScript</li>
                                <li>Watson Assistent</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-3 mt-11
                            xs:text-xl
                            xmd:text-xl
                            xlg:text-2xl
                            sm:text-2xl
                            md:text-3xl
                            lg:text-3xl
                            xl:text-3xl
                            2xl:text-4xl
                            ">Meu Papel no Projeto:</h2>

                            <p className=" text-base
                            xs:text-sm
                            xmd:text-sm
                            xlg:text-base
                            sm:text-base
                            md:text-base
                            lg:text-base
                            xl:text-base
                            2xl:text-base">
                            Brain Drive é um projeto acadêmico desenvolvido durante o Challenge da FIAP em parceria com a <br/>
                            Porto Seguro. No projeto, atuei junto ao grupo no design e na implementação, integrando a API REST <br/>
                            em Java com o banco de dados e o front-end para garantir o funcionamento do site.
                            </p>
                        </div>

                        <div className='flex ml-32 gap-5 mt-11
                        xs:mb-20 xs:ml-0 xs:justify-center xs:mt-20
                        xmd:mb-20 xmd:ml-0 xmd:justify-center xmd:mt-28
                        xlg:mb-20 xlg:ml-0 xlg:justify-center xlg:mt-28
                        sm:mb-20 sm:ml-0 sm:justify-center sm:mt-28
                        md:mb-20 md:ml-0 md:justify-center md:mt-28
                        lg:mb-20 lg:ml-0 lg:justify-center lg:mt-28
                        xl:ml-0 xl:gap-5 xl:mt-11 
                        2xl:justify-center 2xl:gap-5 2xl:mt-11 2xl:ml-0
                        '>
                            
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                                >
                                <RiJavaLine className="w-8 h-8" />
                            </a>
                        
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                                >
                                <IoIosChatbubbles className="w-8 h-8" />
                            </a>
                        
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                                >
                                <SiNextdotjs className="w-7 h-7" />
                            </a>
                        
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                                >
                                <FaDatabase  className="w-7 h-7" />
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                                >
                                <BiLogoTypescript  className="w-7 h-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}