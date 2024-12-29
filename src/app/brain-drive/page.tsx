"use client";

import { CardProjeto } from "@/components/CardProjeto/CardProjeto";
import { Layout } from "@/components/Layout/Layout";
import { useRouter } from "next/navigation";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { RiJavaLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function BrainDrive() {
    const router = useRouter();
    
    return(
        <Layout>

            <div className=" flex justify-center gap-32 mb-11 ">

                <div className="mt-24 flex justify-start mr-20 -ml-36">
                    <FaCircleArrowLeft className="cursor-pointer text-pink-800 hover:text-pink-700" size={35} onClick={() => router.push('/#projetos')} />
                </div>

                <div className="flex flex-col justify-center mt-24 gap-16">

                    <div>
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
                            className="flex items-center justify-center w-48 h-12 bg-pink-200 text-black font-abel font-semibold rounded-full hover:bg-pink-300 transition-colors duration-600 shadow-md"
                        > Visite o projeto! </a>
                    </div>
                </div>

                <div className="mt-24 ml-11">

                    <div className="mt-10">
                        <h1 className="text-4xl font-abel">DETALHES DO PROJETO</h1>
                    </div>

                    <div>

                        <div className="mt-14">
                            <h2 className="text-4xl text-pink-800 font-abel mb-3">- Brain Drive </h2>

                            <p className="font-abel mb-11">
                            Este projeto é um sistema web de diagnóstico automotivo utilizando inteligência artificial (IA) <br/>
                            para auxiliar os usuários a identificarem problemas nos seus veículos de forma simples e rápida.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-4">Tecnologias Utilizadas:</h2>

                            <ul className="list-disc list-inside text-gray-800">
                                <li>Next.js 13</li>
                                <li>Java</li>
                                <li>Oracle SQL</li>
                                <li>TypeScript</li>
                                <li>Watson Assistent</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-3 mt-11">Meu Papel no Projeto:</h2>

                            <p>
                            Brain Drive é um projeto acadêmico desenvolvido durante o Challenge da FIAP em parceria com a <br/>
                            Porto Seguro. No projeto, atuei junto ao grupo no design e na implementação, integrando a API REST <br/>
                            em Java com o banco de dados e o front-end para garantir o funcionamento do site.
                            </p>
                        </div>

                        <div className='flex ml-32 gap-5 mt-11'>
                            
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
            
        </Layout>
    )
}