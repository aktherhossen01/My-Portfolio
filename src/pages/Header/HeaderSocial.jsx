import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import './Header.css'
const HeaderSocial = () => {
    return (
        <div className="hidden md:block">
            <div className="social text-center bottom-5 flex flex-col items-center gap-5 md:left-20 ">
            <a href="#" target="_blank"><FaLinkedin
             /></a>
            <a href="#" target="_blank"><FaFacebook /></a>
            <a href="#"  target="_blank"><FaGithub /></a>
        </div>
        </div>
    );
};

export default HeaderSocial;