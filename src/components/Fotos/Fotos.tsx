type FotosProps = {
    imagemSrc: string;
    altText: string;
};
    
export const Fotos = ({ imagemSrc, altText }: FotosProps) => {
    return (
        <div className="relative w-60 h-80 bg-pink-300 rounded-lg shadow-lg">
            <img
            src={imagemSrc}
            alt={altText}
            className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-pink-500 opacity-20 rounded-lg"></div>
        </div>
        );
};