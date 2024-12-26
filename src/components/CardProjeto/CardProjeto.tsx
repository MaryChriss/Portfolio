import Image from "next/image";
import Link from "next/link";

interface CardProjetoProps {
    src: string;
    alt: string;
    titulo: string;
    descricao: string;
    link: string; // Adiciona a propriedade de link
}

export const CardProjeto: React.FC<CardProjetoProps> = ({ src, alt, titulo, descricao, link }) => {
    return (
        <Link href={link} passHref>
            <div className="relative w-72 h-72 flex justify-center items-center rounded-3xl shadow-2xl border-2 border-slate-300 group transition-transform duration-500 ease-in-out hover:translate-y-[-20px] hover:bg-slate-950 overflow-hidden cursor-pointer">
                <Image
                    className="h-full w-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                    src={src}
                    alt={alt}
                    width={800}
                    height={800}
                />
                <h1 className="absolute inset-0 flex flex-col justify-center items-center text-lg md:text-xl font-abel text-black px-4 py-2 group-hover:bg-pink-800/60 group-hover:text-white transition-all duration-300 text-center font-bold">
                    {titulo} - <br />
                    {descricao}
                </h1>
            </div>
        </Link>
    );
};
