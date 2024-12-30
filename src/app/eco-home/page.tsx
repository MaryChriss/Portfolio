"use client";

import { CardProjeto } from "@/components/CardProjeto/CardProjeto";
import { Layout } from "@/components/Layout/Layout";
import { useRouter } from "next/navigation";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { RiJavaLine, RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function Ecohome() {

    const router = useRouter();
    
    return(
        <Layout>

            <div className=" flex justify-center gap-48 mb-11 
            xs:flex-col xs:gap-7
            xmd:flex-col xmd:gap-10
            xlg:flex-col xlg:gap-8
            sm:flex-col sm:gap-20
            md:flex-col 
            lg:flex-row 
            xl:flex-row
            2xl:flex-row">

                <div className="mt-24 flex justify-start mr-20 -ml-36
                xs:ml-0 xs:p-6 xs:
                xmd:ml-0 xmd:p-6
                xlg:ml-0 xlg:p-6
                sm:ml-0 sm:p-6
                md:ml-0 md:p-6
                lg:ml-0 lg:p-6
                xl:mt-24 xl:justify-start
                2xl:mt-24 2xl:justify-start 2xl:mr-20 2xl:-ml-36">
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
                2xl:flex-col 2xl:justify-center 2xl:mt-24 2xl:gap-16">

                    <div className="
                    xs:flex xs:justify-center
                    xmd:flex xmd:justify-center
                    xlg:flex xlg:justify-center
                    sm:flex sm:justify-center 
                    md:ml-0 
                    lg:ml-0
                    xl:ml-0 
                    2xl:ml-0">
                        <CardProjeto
                            src="/ecoHome.jpeg"
                            alt="Imagem do EcoHome"
                            titulo="Eco Home"
                            descricao="Monitoramento Ecológico"
                            link={''}
                        />
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="https://global2-front.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-48 h-12 bg-pink-200 text-black font-abel font-semibold rounded-full hover:bg-pink-300 transition-colors duration-600 shadow-md"
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
                2xl:mt-24 2xl:ml-11 ">

                    <div className="mt-10">
                        <h1 className="text-4xl font-abel">DETALHES DO PROJETO</h1>
                    </div>

                    <div>

                        <div className="mt-14">
                            <h2 className="text-4xl text-pink-800 font-abel mb-3">- EcoHome</h2>

                            <p className="font-abel mb-11">
                                O projeto EcoHome foi desenvolvido com o propósito de oferecer uma solução prática e acessível <br/>
                                para famílias monitorarem e otimizarem o consumo de energia elétrica em suas casas. Auxiliando os <br/> 
                                usuários a tomarem decisões, contribuindo para a preservação ambiental e economia doméstica.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-4">Tecnologias Utilizadas:</h2>

                            <ul className="list-disc list-inside text-gray-800">
                                <li>Next.js</li>
                                <li>Java</li>
                                <li>Oracle SQL</li>
                                <li>TypeScript</li>
                                <li>Tailwind</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-3 mt-11">Meu Papel no Projeto:</h2>

                            <p>
                                O EcoHome é um projeto academico desenvolvido para a Global Solution da FIAP. No projeto, atuei <br/>
                                junto ao grupo no design e na implementação, integrando a API REST em Java com o banco de <br/>
                                dados e o front-end para garantir o funcionamento do site.
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
                        2xl:justify-center 2xl:gap-5 2xl:mt-11 2xl:ml-0'>
                            
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