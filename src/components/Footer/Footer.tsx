import { GrInstagram } from "react-icons/gr"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import { MdEmail } from "react-icons/md"

export const Footer = () => {
    return(
        <div className="flex w-full h-16 bg-black justify-between items-center">

            <div className="flex items-center ml-14">
                <MdEmail size="1.5rem" color="#7c1f41" />
                <p className="text-white">mariana.christina.cmf@gmail.com</p>
            </div>

            <div className="flex gap-10 mr-14">
                <a
                    href="https://www.instagram.com/mariana_christina_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-pink-800 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                    >
                    <GrInstagram className="w-6 h-6" />
                </a>

                <a
                    href="https://github.com/MaryChriss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-pink-800 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                    >
                    <IoLogoGithub className="w-6 h-6" />
                </a>
                
                <a
                    href="https://www.linkedin.com/in/mariana-fernandes-92690425a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-pink-800 text-white rounded-full hover:bg-pink-600 transition-colors duration-600"
                    >
                    <IoLogoLinkedin className="w-6 h-6" />
                </a>
            </div>
        </div>
    )
}