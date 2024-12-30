import { GrInstagram } from "react-icons/gr"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import { MdEmail } from "react-icons/md"

export const Footer = () => {
    return(
        <div className="flex w-full h-16 bg-black justify-between items-center
            xs:h-32 xs:gap-4
            xmd:h-32 xmd:gap-16
            xlg:h-40 xlg:gap-28
            sm:h-16 
            md:h-16 
            lg:h-16
            xl:h-16
            2xl:h-16
        ">

            <div className="flex items-center ml-14
            xs:-ml-1
            xmd:-ml-1
            xlg:ml-0
            sm:ml-14 
            md:ml-14 
            lg:ml-14 
            xl:ml-14
            2xl:ml-14
            ">
                <MdEmail size="1.5rem" color="#7c1f41" />
                <p className="text-white">mariana.christina.cmf@gmail.com</p>
            </div>

            <div className="flex gap-10 mr-14
            xs:gap-0 xs:flex-col
            xmd:gap-0
            xlg:gap-2
            sm:gap-10 
            md:gap-10 md:flex-row
            lg:gap-10 lg:flex-row
            xl:gap-10 xl:flex-row
            2xl:gap-10 2xl:flex-row
            ">
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