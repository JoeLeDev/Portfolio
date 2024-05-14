import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from 'react-icons/hi'
import { useState } from "react";
import JoeLogo from '../../assets/JoeLogo.jpg'

const Nav = () => {

    const[toggle, setToggle] = useState(false);

    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }
  return (
<div className="flex flex-col">
  <div className="flex items-center justify-between p-6 bg-black">
    {/* Logo et le nom */}
    <a href="#" className="text-green-600 font-mono text-3xl tracking-wider flex items-center">
      <img src={JoeLogo} alt="" width={100} />
    </a>

    {/* Liens de navigation pour grands écrans */}
    <div className="hidden lg:flex space-x-4">
      <a href="#" className="text-white hover:bg-green-800 rounded-full px-5 py-2 text-xl">Skills</a>
      <a href="#" className="text-white hover:bg-green-800 rounded-full px-5 py-2 text-xl">Projects</a>
      <a href="#" className="text-white hover:bg-green-800 rounded-full px-5 py-2 text-xl">Experience</a>
    </div>

    {/* Burger icon pour petits écrans */}
    <div className="lg:hidden">
      {toggle ? (
        <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer' />
      ) : (
        <HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer" />
      )}
    </div>
  </div>
  
  {/* Conteneur du menu déroulant pour petits écrans */}
  {toggle && (
    <div className="lg:hidden flex flex-col space-y-2 p-10 bg-black">
      <a href="#" className="text-white text-xl mb-2 cursor-pointer">Skills</a>
      <a href="#" className="text-white text-xl mb-2 cursor-pointer">Projects</a>
      <a href="#" className="text-white text-xl mb-2 cursor-pointer">Experience</a>
    </div>
  )}
</div>
  )}

export default Nav
