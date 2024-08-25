import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="mx-2 px-8 py-12 border-t border-neutral-900 text-neutral-500">
           <div className="flex justify-between items-center">
                <div className=" text-sm font-light">
                    © 2024 Igor Bonfim.
                </div>
                <nav className="text-2xl flex justify-center items-center gap-4">
                    <a href="https://www.linkedin.com/in/igormbonfim/" target="_blank"><FaLinkedin className="cursor-pointer hover:text-gray-400"></FaLinkedin></a>
                    <a href="https://github.com/IgormBonfim" target="_blank"><FaGithub className="cursor-pointer hover:text-gray-400"></FaGithub></a>
                    <IoIosGlobe className="cursor-pointer hover:text-gray-400"></IoIosGlobe>
                </nav>
            </div> 
        </footer>
    )
}