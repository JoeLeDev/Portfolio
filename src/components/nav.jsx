import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState, useContext } from "react";
import JoeLogo from '../../assets/JoeLogo.jpg';
import SectionRefsContext from "../script/sectionRef";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const {experience, skills, project} = useContext(SectionRefsContext);

  const scrollToSection = (event, ref) => {
    event.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-4 bg-black">
        <a href="#" className="text-green-600 font-mono text-3xl tracking-wider flex items-center">
          <img src={JoeLogo} alt="Joe Logo" width={100} />
        </a>

        <div className="hidden lg:flex space-x-4">
          <a href="#" onClick={(e) => scrollToSection(e, experience)} className="text-white hover:bg-green-800 rounded-full px-5 py-2 text-xl">Experience</a>
          <a href="#" onClick={(e) => scrollToSection(e, project)} className="text-white hover:bg-green-800 rounded-full px-5 py-2 text-xl">Projects</a>
          <a href="#" onClick={(e) => scrollToSection(e, skills)} className="text-white hover:bg-green-800 rounded-full px-5 py-2 text-xl">Skills</a>
        </div>

        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer' />
          ) : (
            <HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer" />
          )}
        </div>
      </div>

      {toggle && (
        <div className="lg:hidden flex flex-col space-y-2 p-10 bg-black">
          <a href="#" onClick={(e) => scrollToSection(e, skills)} className="text-white text-xl mb-2 cursor-pointer">Skills</a>
          <a href="#" onClick={(e) => scrollToSection(e, project)} className="text-white text-xl mb-2 cursor-pointer">Projects</a>
          <a href="#" onClick={(e) => scrollToSection(e, experience)} className="text-white text-xl mb-2 cursor-pointer">Experience</a>
        </div>
      )}
    </div>
  );
}

export default Nav;
