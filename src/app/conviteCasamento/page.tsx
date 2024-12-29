"use client";

import { CardProjeto } from "@/components/CardProjeto/CardProjeto";
import { Layout } from "@/components/Layout/Layout";
import { useRouter } from "next/navigation";
import { BiLogoTypescript } from "react-icons/bi";
import { FaAngular, FaDatabase, FaSass } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { RiJavaLine, RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function Convite() {

    const router = useRouter();
    
    return(
        <Layout>

            <div className=" flex justify-center gap-32 mb-11 ">

                <div className="mt-24 flex justify-start mr-20 -ml-36">
                    <FaCircleArrowLeft className="cursor-pointer text-pink-800 hover:text-pink-700" size={35} onClick={() => router.push('/#projetos')} />
                </div>

                <div className="flex flex-col justify-center mt-24 gap-16 ">

                    <div>
                        <CardProjeto
                            src="/convite.jpeg"
                            alt="Convite"
                            titulo="Convite"
                            descricao="Para casamento"
                            link={''}
                        />
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="https://convite-tatiane-roberto.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-48 h-12 bg-pink-200 text-black font-abel font-semibold rounded-full hover:bg-pink-300 transition-colors duration-600 shadow-md"
                        > Visite o projeto! </a>
                    </div>
                </div>

                <div className="mt-24">

                    <div className="mt-10">
                        <h1 className="text-4xl font-abel">DETALHES DO PROJETO</h1>
                    </div>

                    <div>

                        <div className="mt-14">
                            <h2 className="text-4xl text-pink-800 font-abel mb-3">- Convite de casamento.</h2>

                            <p className="font-abel mb-11">
                            O convite de casamento foi criado com o propósito de refletir o amor e a dedicação colocados na <br/>
                            celebração desse momento tão especial.<br/>
                            Pensado com cada detalhe para transmitir carinho e sofisticação, <br/>
                            ele convida os amigos e familiares a compartilharem a alegria de um dia único, cheio de significado e emoção.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-4">Tecnologias Utilizadas:</h2>

                            <ul className="list-disc list-inside text-gray-800">
                                <li>Angular</li>
                                <li>Sass</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl text-pink-800 font-abel mb-3 mt-11">Meu Papel no Projeto:</h2>

                            <p>
                            Este convite de casamento foi desenvolvido em colaboração, unindo esforços e criatividade para criar algo especial.<br/>
                            Minha contribuição esteve focada principalmente na parte visual e responsiva, cuidando das responsividade,<br/>
                            auxiliando no design, na escolha das cores e desenvolvendo as ideias iniciais no Figma.<br/>
                            Foi gratificante transformar conceitos em um convite elegante e funcional, que reflete a essência da
                            celebração e encanta a todos que o recebem.<br/>
                            </p>
                        </div>

                        <div className='flex ml-32 gap-5 mt-11'>
                            
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                                >
                                <FaSass className="w-8 h-8" />
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                                >
                                <FaAngular className="w-8 h-8" />
                            </a>
        
                        </div>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}