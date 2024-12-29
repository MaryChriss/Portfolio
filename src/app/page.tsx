"use client";

import { CardProjeto } from '@/components/CardProjeto/CardProjeto';
import { Fotos } from '@/components/Fotos/Fotos';
import Input from '@/components/Input/Input';
import { Layout } from '@/components/Layout/Layout';
import { useState } from 'react';
import { FaDatabase } from 'react-icons/fa';
import { PiMoonStarsFill } from 'react-icons/pi';
import { RiJavaLine, RiReactjsLine } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';


// sm: md: lg: xl: 2xl:

export default function Home() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const response = await fetch('https://formspree.io/f/xlddgqag', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.nome,
                email: formData.email,
                message: formData.mensagem
            })
        });

        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            setFormData({
                nome: '',
                email: '',
                mensagem: ''
            });
        } else {
            alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error("Erro:", error); 
        alert('Erro ao enviar a mensagem. Verifique sua conexão e tente novamente.');
    }
};

  return (
    <Layout>
      <div id="home" className=' mb-80 mt-64
        sm:mb-80 sm:mt-96
        md:mt-96
        lg:mt-96
        xl:mt-64 
        2xl:mt-64
      '>

        <div  className='mt-40 flex items-center justify-center gap-96 mb-24
        sm:flex-col sm:mt-16 sm:-mb-11
        md:flex-col
        lg:flex-col
        xl:mt-40 xl:flex-row xl:gap-24
        2xl:flex-row 2xl:mt-40
        '>

          <div className='text-xl -mt-48
          '>
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

              <div className='text-4xl font-bold text-gray-800 flex '>
                <p>Eu sou a
                  <span className=" text-pink-800">  Mariana Christina.</span>
                </p>
              </div>

            <p className='text-2xl
            '> <br/> Estudante de Análise e Desenvolvimento de Sistemas,<br/>
              apaixonada por criar experiências digitais intuitivas e<br/>
              criativas.
            </p>

            <p className='text-2xl 
            sm:-mb-52
            md:-mb-52 
            lg:-mb-52 
            xl:text-2xl
            2xl:text-2xl '> <br/>
              Explore meu portfólio para conhecer mais sobre mim e <br/> 
              meus projetos!
            </p>

          </div>

          <div>
            <Fotos imagens={[{ src: "/princImage.jpeg", alt: "Minha Foto" }]} />
          </div>
        </div>

      </div>

      <div id="sobre-mim" className='bg-pink-50 flex items-center justify-center gap-56
      sm:flex-col
      md:flex-col
      lg:flex-col 
      xl:justify-center xl:flex-row
      2xl:items-center 2xl:flex-row
      '>

          <div className='-mt-40
          sm:mt-32 
          md:mt-32 
          lg:mt-32  
          xl:-mt-40 xl:ml-28
          2xl:-mt-40
          '>
          <Fotos
              imagens={[
                  { src: "/sobre.jpeg", alt: "Foto 1" },
                  { src: "/aula.jpeg", alt: "Foto 2" },
                  { src: "/costa.jpeg", alt: "Foto 3" },
              ]}
          />
          </div>

          <div>

            <div className='mt-32 mb-24
              sm:mt-0
              md:mt-0
              lg:mt-0
              xl:mb-24
              2xl:mb-24
            '>

              <div className='flex gap-2 mt-12
              sm:justify-center 
              md:justify-center 
              lg:justify-center
              xl:gap-2
              2xl:gap-2
              '>
                <PiMoonStarsFill size="2rem" className='text-pink-800 mt-1'/>
                <h1 className='text-3xl text-pink-800
                  sm:text-2xl
                  md:text-2xl
                  lg:text-2xl
                  xl:text-3xl
                  2xl:text-3xl
                '>Sobre Mim </h1>
              </div>

              <p className='text-xl
                sm:text-lg sm:p-14
                md:text-lg md:p-14
                lg:text-lg lg:p-14
                xl:text-xl
                2xl:text-xl
              '> <br/> Sou entusiasta da tecnologia e estudante de <span className='text-pink-600'> Análise e Desenvolvimento de <br/>
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

              <div className='flex ml-32 gap-5 mb-24
              sm:ml-0 sm:justify-center
              md:ml-0 md:justify-center
              lg:ml-0 lg:justify-center
              xl:mb-24
              2xl:mb-24
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

      <div id='projetos'>

        <div className='flex gap-2 justify-center mt-10 mb-10'>
          <PiMoonStarsFill size="2rem" className='text-pink-800 mt-1'/>
          <h1 className='text-3xl mb-7'>Meus Projetos </h1>
        </div>

        <div className="flex justify-center text-center flex-col gap-12  mt-14 mb-14
        ">
      
          <div className='flex justify-center gap-28
          sm:flex-col
          md:flex-col 
          lg:flex-row lg:gap-16
          xl:gap-28 xl:flex-row
          2xl:gap-28 2xl:flex-row
          '>

            <CardProjeto
                src="/ecoHome.jpeg"
                alt="Imagem do EcoHome"
                titulo="Eco Home"
                descricao="Monitoramento Ecológico"
                link="/eco-home"
            />

            <CardProjeto
                src="/brainDrive.jpeg"
                alt="Imagem do Brain Drive"
                titulo="Brain Drive"
                descricao="Diagnóstico Automotivo"
                link="/brain-drive"
            />

            <CardProjeto
                src="/portfolio.jpeg"
                alt="Imagem do Portfólio"
                titulo="Portfólio"
                descricao="Projeto Pessoal"
                link="/portfolio"
            />

          </div>

          <div className='flex justify-center gap-28 mb-9
          sm:flex-col
          md:flex-col
          lg:flex-row lg:gap-16
          xl:mb-9 xl:flex-row
          2xl:mb-9 2xl:flex-row
          '>

            <CardProjeto
              src="/convite.jpeg"
              alt="Convite"
              titulo="Convite"
              descricao="Para casamento" 
              link="/conviteCasamento"            />

            <CardProjeto
                src="/branco.jpg"
                alt="Imagem do Portfólio"
                titulo="Em breve"
                descricao="..."
                link='/#projetos'  
            />

          </div>

        </div>

        
      </div>

      <div id='contato' className=' bg-pink-50 
      '>

        <div className='flex gap-2 justify-center'>
          <PiMoonStarsFill size="2rem" className='text-pink-800 mt-12'/>
          <h1 className='text-3xl mt-11'>Contato </h1>
        </div>

        <div className='flex justify-center gap-64 mt-14
          sm:flex-col sm:gap-11
          md:flex-col
          lg:flex-col 
          xl:mt-14 xl:flex-row xl:gap-36
          2xl:mt-14 2xl:flex-row 2xl:gap-64
        '>
          <form onSubmit={handleSubmit}>
              <div className='
              sm:flex sm:flex-col
              md:flex md:flex-col
              lg:flex lg:flex-col
              xl:mt-0 xl:flex-col
              2xl:mt-0 2xl:flex-col'>

                    <Input
                      label="Nome*:"
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                    />

                    <Input
                      label="Email*:"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />

                    <Input
                      label="Mensagem*:"
                      type="text"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      textarea={true}
                    />

              </div>

                <div className='flex text-center justify-center mt-8 mb-32'>
                  <button type="submit" className="text-base bg-pink-700 hover:bg-pink-600 transition-colors duration-600 text-white p-3 w-36 rounded-full ">Enviar</button>
                </div>
        </form>

        <div className='mt-16
          sm:mt-5 sm:flex sm:justify-center sm:mb-40
          md:mt-5 md:justify-center md:mb-40
          lg:mt-5 lg:justify-center lg:mb-40
          xl:mt-16 
          2xl:mt-16
        '>
          <Fotos imagens={[{ src: "/contat.jpeg", alt: "Minha Foto" }]} />
        </div>
        </div>

      </div>
    </Layout>
  )
}
