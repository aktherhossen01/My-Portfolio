import CTA from "./CTA";
import ME from "../../assets/0000.png";
import HeaderSocial from "./HeaderSocial";
import "./Header.css";

const Header = () => {
  return (
    <div className="text-center  items-center md:h-[100vh] truncate pt-[5rem] space-y-3 bottom-12">
      <div>
        <h4>Hello I am </h4>
        <h1 className="text-3xl">Akter Hosen</h1>
        <p className="">Web developer</p>
      </div>
      <CTA></CTA>
      <div className="flex items-center justify-between mx-auto">
        <HeaderSocial></HeaderSocial>
        <div className="me ml-10 flex justify-center w-full items-center ">
          <img src={ME} className="mx-auto" alt="me" />
        </div>
        <a href="#contact" className="scroll hidden md:block">
          {" "}
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default Header;
