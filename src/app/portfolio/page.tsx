"use client";

import { CardProjeto } from "@/components/CardProjeto/CardProjeto";
import { Layout } from "@/components/Layout/Layout";
import { useRouter } from "next/navigation";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { RiJavaLine, RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function Portfolio() {

    const router = useRouter();
    
    return(
        <Layout>

            <div className=" flex justify-center gap-48 mb-11 
            sm:flex-col sm:gap-20
            md:flex-col 
            lg:flex-row 
            xl:flex-row
            2xl:flex-row ">

                <div className="mt-24 flex justify-start mr-20 -ml-36
                sm:ml-0 sm:p-6
                md:ml-0 md:p-6
                lg:ml-0 lg:p-6
                xl:mt-24 xl:justify-start
                2xl:mt-24 2xl:justify-start 2xl:mr-20 2xl:-ml-36">
                    <FaCircleArrowLeft className="cursor-pointer text-pink-800 hover:text-pink-700" size={35} onClick={() => router.push('/#projetos')} />
                </div>

                <div className="flex flex-col justify-center mt-24 gap-16
                sm:mt-0
                md:ml-0 
                lg:ml-0 
                xl:flex-col xl:justify-center xl:mt-24 xl:gap-16
                2xl:flex-col 2xl:justify-center 2xl:mt-24 2xl:gap-16">

                    <div className="
                    xs:ml-0
                    sm:flex sm:justify-center 
                    md:ml-0 
                    lg:ml-0
                    xl:ml-0 
                    2xl:ml-0">
                        <CardProjeto
                            src="/portfolio.jpeg"
                            alt="Imagem do Portfólio"
                            titulo="Portfólio"
                            descricao="Projeto Pessoal"
                            link={''}
                        />
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="https://portfolio-alpha-lovat-97.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-48 h-12 bg-pink-200 text-black font-abel font-semibold rounded-full hover:bg-pink-300 transition-colors duration-600 shadow-md"
                        > Visite o projeto! </a>
                    </div>
                </div>

                <div className="mt-24 ml-11
                sm:mt-0
                md:mt-0 
                lg:mt-24 lg:ml-11 
                xl:mt-24 xl:ml-11 
                2xl:mt-24 2xl:ml-11">

                    <div className="mt-10">
                        <h1 className="text-4xl font-abel">DETALHES DO PROJETO</h1>
                    </div>

                    <div>

                        <div className="mt-14">
                            <h2 className="text-4xl text-pink-800 font-abel mb-3">- Meu Portfólio Mariana Christina.</h2>

                            <p className="font-abel mb-11">
                            Meu portfólio pessoal foi desenvolvido para criar uma presença online profissional, onde <br/>
                            apresento minha trajetória, projetos e habilidades. Ele reflete meu compromisso com a <br/>
                            tecnologia e meu desejo de compartilhar experiências que marcaram minha jornada. <br/>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-4">Tecnologias Utilizadas:</h2>

                            <ul className="list-disc list-inside text-gray-800">
                                <li>Next.js</li>
                                <li>TypeScript</li>
                                <li>Tailwind</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-3 mt-12">Meu Papel no Projeto:</h2>

                            <p>
                            Como a única desenvolvedora deste projeto, fui responsável por todas as etapas do<br/>
                            desenvolvimento, desde o design até a implementação. Isso incluiu a criação da identidade<br/>
                            visual, a escrita do código e a otimização do desempenho do site.<br/>
                            </p>
                        </div>

                        <div className='flex ml-32 gap-5 mt-11
                        sm:mb-20 sm:ml-0 sm:justify-center sm:mt-28
                        md:mb-20 md:ml-0 md:justify-center md:mt-28
                        lg:mb-20 lg:ml-0 lg:justify-center lg:mt-28
                        xl:ml-0 xl:gap-5 xl:mt-11 
                        2xl:justify-center 2xl:gap-5 2xl:mt-11 2xl:ml-0'>
                        
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                                >
                                <RiReactjsLine className="w-8 h-8" />
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
                                <BiLogoTypescript  className="w-7 h-7" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}