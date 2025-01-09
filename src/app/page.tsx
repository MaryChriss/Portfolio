"use client";

import { CardProjeto } from '@/components/CardProjeto/CardProjeto';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import { Fotos } from '@/components/Fotos/Fotos';
import Input from '@/components/Input/Input';
import { Layout } from '@/components/Layout/Layout';
import { useState } from 'react';
import { FaDatabase } from 'react-icons/fa';
import { PiMoonStarsFill } from 'react-icons/pi';
import { RiJavaLine, RiReactjsLine } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nome: Yup.string()
      .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'O nome deve conter apenas letras.')
      .min(3, 'O nome deve ter pelo menos 3 caracteres.')
      .required('O nome é obrigatório.'),
  email: Yup.string()
      .email('Insira um e-mail válido.')
      .required('O e-mail é obrigatório.'),
  mensagem: Yup.string()
      .min(5, 'A mensagem deve ter pelo menos 5 caracteres.')
      .required('A mensagem é obrigatória.')
});


// xs: xmd: xlg: sm: md: lg: xl: 2xl:

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

const [errorMessages, setErrorMessages] = useState<string[]>([]);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    await validationSchema.validate(formData, { abortEarly: false });

    // Sucesso na validação e envio
    const response = await fetch('https://formspree.io/f/xlddgqag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setErrorMessages([]);
      alert("Mensagem enviada com sucesso!");
    } else {
      setErrorMessages(["Erro ao enviar a mensagem. Tente novamente."]);
    }
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      setErrorMessages(error.inner.map(err => err.message));
    } else {
      setErrorMessages(["Erro inesperado. Tente novamente."]);
    }
  }
};

  return (
    <Layout>

      <section id="home" className='mb-80 mt-64 
        xs:mt-0 xs:mb-10
        xmd:mt-0 xmd:mb-72
        xlg:mt-0 xlg:mb-72 
        sm:mb-80 sm:mt-40
        md:mt-32
        lg:mt-32
        xl:mt-0 xl:mb-0
        2xl:mt-36 2xl:mb-36
      '>

        <div  className='mt-40 flex items-center justify-center mb-24
        xs:flex-col xs:p-4 xs:mt-32
        xmd:flex-col xmd:p-9
        xlg:flex-col xlg:p-9
        sm:flex-col sm:mt-16 sm:-mb-11
        md:flex-col
        lg:flex-col
        xl:mt-36 xl:flex-row xl:gap-24
        2xl:flex-row 2xl:gap-96 2xl:mt-11
        '>
          

          <div className='text-xl 
          '>
          <h1 className="text-4xl font-bold text-gray-800
          xs:text-lg
          xmd:text-xl xmd:mt-0
          xlg:text-2xl xlg:mt-0
          sm:text-2xl 
          md:text-3xl 
          lg:text-3xl 
          xl:text-2xl
          2xl:text-4xl 2xl:mt-28
          ">
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

              <div className='text-4xl font-bold text-gray-800 flex
              xs:text-lg
              xmd:text-xl
              xlg:text-2xl 
              sm:text-2xl 
              md:text-3xl 
              lg:text-3xl 
              xl:text-2xl
              2xl:text-4xl
              '>
                <p>Eu sou a
                  <span className=" text-pink-800">  Mariana Christina.</span>
                </p>
              </div>

            <p className='text-2xl
              xs:text-sm
              xmd:text-base
              xlg:text-lg 
              sm:text-xl 
              md:text-xl
              lg:text-xl 
              xl:text-lg
              2xl:text-xl
            '> <br/> Estudante de Análise e Desenvolvimento de Sistemas,<br/>
              apaixonada por criar experiências digitais intuitivas e<br/>
              criativas.
            </p>

            <p className='text-2xl
            xs:text-sm xs:-mb-52
            xmd:text-base xmd:-mb-60
            xlg:-mb-52 xlg:text-lg 
            sm:-mb-52 sm:text-xl 
            md:-mb-52 md:text-xl 
            lg:-mb-52 lg:text-xl 
            xl:text-lg
            2xl:text-xl '> <br/>
              Explore meu portfólio para conhecer mais sobre mim e <br/> 
              meus projetos!
            </p>

            <div className="mt-60
              xs:mt-64 xs:mb-20
              xmd:mt-72 xmd:mb-14
              xlg:mt-60 xlg:mb-14
              sm:mt-60
              md:mt-60 md:mb-40
              lg:mt-60 
              xl:mt-60
              2xl:mt-60
            ">
              <a
                href="/Curriculo_Mariana.pdf" download="Curriculo_Mariana.pdf"
                target="_blank"
                className="flex items-center justify-center w-48 h-12 bg-pink-200 text-black font-abel font-semibold text-lg rounded-full hover:bg-pink-300 transition-colors duration-600 shadow-md
                xs:w-28 xs:h-12 xs:text-sm
                xmd:w-28 xmd:h-12 xmd:text-sm
                xlg:w-28 xlg:h-12 xlg:text-sm
                sm:w-32 sm:text-base
                md:w-48 md:text-lg
                lg:w-48 lg:text-lg
                xl:w-36 xl:text-base
                2xl:w-48 2xl:text-lg
                "
              > Download CV </a>
            </div>
            

          </div>
          <div className=' mt-0
            xs:mr-5
            xmd:mt-0
            xlg:mt-0 
            sm:mt-0
            md:mt-0 
            lg:mt-0 
            xl:-mt-52
            2xl:-mt-20
          '>
            <Fotos imagens={[{ src: "/princImage.jpeg", alt: "Minha Foto" }]} />
          </div>
        </div>

      </section>

      <section id="sobre-mim" className='bg-pink-50 flex items-center justify-center gap-56
      xs:flex-col
      xmd:flex-col
      xlg:flex-col
      sm:flex-col
      md:flex-col
      lg:flex-col 
      xl:justify-center xl:flex-row
      2xl:items-center 2xl:flex-row
      '>

          <div className='-mt-40
          xs:mt-40 xs:-mb-48 xs:mr-5
          xmd:mt-40
          xlg:mt-24
          sm:mt-32 
          md:mt-32 
          lg:mt-32  
          xl:-mt-40 xl:ml-28
          2xl:-mt-52
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
              xs:mt-0 xs:mb-0
              xmd:mt-0
              xlg:mt-0
              sm:mt-0
              md:mt-0
              lg:mt-0
              xl:mb-0
              2xl:mb-0
            '>

              <div className='flex gap-2 mt-12
              xs:justify-center xs:-mb-10
              xmd:justify-center
              xlg:justify-center
              sm:justify-center 
              md:justify-center 
              lg:justify-center
              xl:gap-2
              2xl:gap-2 2xl:mt-32
              '>
                <PiMoonStarsFill size="2rem" className='text-pink-800 mt-1'/>
                <h1 className='text-3xl text-pink-800
                  xs:text-lg 
                  xmd:text-lg
                  xlg:text-xl
                  sm:text-2xl
                  md:text-2xl
                  lg:text-2xl
                  xl:text-2xl xl:mb-11
                  2xl:text-3xl
                '>Sobre Mim </h1>
              </div>

              <p className='text-xl
                xs:text-sm xs:p-9
                xmd:text-sm xmd:p-9
                xlg:text-base xlg:p-10
                sm:text-lg sm:p-14
                md:text-lg md:p-14
                lg:text-lg lg:p-14
                xl:text-base xl:p-1
                2xl:text-xl
              '> <br/> Sou entusiasta da tecnologia e estudante de <span className='text-pink-600'> Análise e Desenvolvimento de <br/>
              Sistemas na FIAP </span>. Oque mais me fascina no mundo da tecnologia é a <br/>
                possibilidade de criar soluções inovadoras para problemas do dia a dia, <br/>
                explorando a criatividade e acompanhando a constante evolução dessa área tão dinâmica. <br/>

                <br/> Durante minha jornada, trabalhei em projetos com <span className='text-pink-600'> Java, React, Next.js, SQL e Python </span> <br/>
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
              xs:ml-0 xs:justify-center
              xmd:ml-0 xmd:justify-center
              xlg:ml-0 xlg:justify-center
              sm:ml-0 sm:justify-center
              md:ml-0 md:justify-center
              lg:ml-0 lg:justify-center
              xl:mb-24 xl:mt-6
              2xl:mb-28 2xl:mt-10
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
      </section>

      <section id='projetos'>

        <div className='flex gap-2 justify-center mt-10 mb-10'>
          <PiMoonStarsFill size="2rem" className='text-pink-800 mt-1'/>
          <h1 className='text-3xl mb-7'>Meus Projetos </h1>
        </div>

        <div className="flex justify-center text-center md:items-center flex-col gap-12  mt-14 mb-14
          xs:flex-col xs:items-center
          xmd:flex-col xmd:items-center
          xlg:flex-col xlg:items-center
          sm:flex-col sm:items-center
          md:flex-col 
          lg:flex-col lg:gap-16 
          xl:gap-28 xl:flex-col
          2xl:gap-14 2xl:flex-col
        ">
      
          <div className='flex  justify-center gap-28
          xs:flex-col
          xmd:flex-col
          xlg:flex-col
          sm:flex-col 
          md:flex-col md:w-full md:justify-center md:items-center
          lg:flex-row lg:gap-16
          xl:gap-28 xl:flex-row
          2xl:gap-28
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
          xs:flex-col
          xmd:flex-col
          xlg:flex-col
          sm:flex-col
          md:flex-col md:items-center
          lg:flex-row lg:gap-16
          xl:mb-9 xl:flex-row
          2xl:mb-9
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
      </section>

      <section id='contato' className=' bg-pink-50 
      '>

        <div className='flex gap-2 justify-center'>
          <PiMoonStarsFill size="2rem" className='text-pink-800 mt-12'/>
          <h1 className='text-3xl mt-11'>Contato </h1>
        </div>

        <div className='flex justify-center gap-64 mt-14
          xs:flex-col xs:gap-2
          xmd:flex-col xmd:gap-2
          xlg:flex-col xlg:gap-2
          sm:flex-col sm:gap-11
          md:flex-col
          lg:flex-col 
          xl:mt-0 xl:flex-row xl:gap-36
          2xl:mt-14 2xl:flex-row 2xl:gap-64
        '>
          <form onSubmit={handleSubmit}>
              <div className='
              xs:flex xs:flex-col xs:justify-center xs:items-center
              xmd:flex xmd:flex-col
              xlg:flex xlg:flex-col
              sm:flex sm:flex-col
              md:flex md:flex-col md:items-center
              lg:flex lg:flex-col lg:items-center
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

                <div className="fixed bottom-4 right-4 flex justify-end items-end z-50">
                  {errorMessages.length > 0 && (
                    <ErrorModal messages={errorMessages} onClose={() => setErrorMessages([])} />
                  )}
                </div>
        </form>

        <div className='mt-16
          xs:mt-5 xs:mb-52 xs:ml-4
          xmd:mt-5 xmd:mb-52 xmd:flex xmd:justify-center xmd:-ml-2
          xlg:mt-5 xlg:mb-52
          sm:mt-5 sm:flex sm:justify-center sm:mb-40
          md:mt-5 md:justify-center md:mb-40
          lg:mt-5 lg:justify-center lg:mb-40
          xl:mt-32
          2xl:mt-28
        '>
          <Fotos imagens={[{ src: "/contat.jpeg", alt: "Minha Foto" }]} />
        </div>
        </div>

      </section>
    </Layout>
  )
}
