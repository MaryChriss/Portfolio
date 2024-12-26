"use client";

import { Fotos } from '@/components/Fotos/Fotos';
import { Layout } from '@/components/Layout/Layout';
import { FaDatabase } from 'react-icons/fa';
import { PiMoonStarsFill } from 'react-icons/pi';
import { RiJavaLine, RiReactjsLine } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';

// sm: md: lg: xl: 2xl:

export default function Home() {
  return (
    <Layout>
      <div className=' mb-80 mt-64'>

        <div className='mt-40 flex items-center justify-center gap-96 mb-24'>

          <div className='text-xl'>
          <h1 className="text-4xl font-bold text-gray-800">
            <Typewriter
              words={["Hello World!", "Bem-vindo(a) ao meu mundo!", "Muito Prazer!"]}
              loop={false} 
              typeSpeed={160}
              deleteSpeed={140}
              delaySpeed={1000}
              cursor
              cursorStyle="|"
            />
          </h1>

              <div className='text-4xl font-bold text-gray-800 flex'>
                <p>Eu sou a
                  <span className=" text-pink-800">  Mariana Christina.</span>
                </p>
              </div>

            <p className='text-2xl'> <br/> Estudante de Análise e Desenvolvimento de Sistemas,<br/>
              apaixonada por criar experiências digitais intuitivas e<br/>
              criativas.
            </p>

            <p className='text-2xl'> <br/>
              Explore meu portfólio para conhecer mais sobre mim e <br/> 
              meus projetos!
            </p>

          </div>

          <div>
            <Fotos imagens={[{ src: "/princImage.jpeg", alt: "Minha Foto" }]} />
          </div>
        </div>

      </div>

      <div className='bg-pink-50 flex items-center justify-center gap-56'>

          <div className='-mt-40'>
          <Fotos
              imagens={[
                  { src: "/sobre.jpeg", alt: "Foto 1" },
                  { src: "/aula.jpeg", alt: "Foto 2" },
                  { src: "/costa.jpeg", alt: "Foto 3" },
              ]}
          />
          </div>

          <div>

            <div className='mt-32 mb-24'>

              <div className='flex gap-2'>
                <PiMoonStarsFill size="2rem" className='text-pink-800 mt-1'/>
                <h1 className='text-3xl text-pink-800'>Sobre Mim </h1>
              </div>

              <p className='text-xl'> <br/> Sou entusiasta da tecnologia e estudante de <span className='text-pink-600'> Análise e Desenvolvimento de <br/>
              Sistemas na FIAP. </span> Oque mais me fascina no mundo da tecnologia é a <br/>
                possibilidade de criar soluções inovadoras para problemas do dia a dia, <br/>
                explorando a criatividade e acompanhando a constante evolução dessa área tão dinâmica. <br/>

                <br/> Durante minha jornada, trabalhei em projetos com <span className='text-pink-600'> Java, React e Next.js, </span> <br/>
                explorando desde APIs até interfaces intuitivas, cada experiência me ajudou a <br/>
                desenvolver habilidades técnicas e um olhar atento para criar soluções que <br/>
                aliem funcionalidade e design. <br/>

                <br/> Atualmente, meu foco está no desenvolvimento front-end, onde combino <br/>
                habilidades técnicas com design intuitivo para criar interfaces funcionais e <br/>
                cativantes. Além disso, estou expandindo meus conhecimentos em back-end e <br/>
                bancos de dados, sempre ansiosa para enfrentar novos desafios e contribuir <br/>
                para projetos que impactem positivamente as pessoas! <br/></p>
            </div>

              <div className='flex ml-32 gap-5 mb-24'>
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
              </div>
          </div>
      </div>

      <div>

          <div className='flex gap-2'>
              <PiMoonStarsFill size="2rem" className='text-pink-800 mt-1'/>
              <h1 className='text-3xl'>Meus Projetos </h1>
            </div>


      </div>
    </Layout>
  )
}
