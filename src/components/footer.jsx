import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className='text-white justify-center py-8'>
      <div className='flex justify-center py-3 lg:text-2xl sm:text-xl ssm:text-xl'>
        <h3>Portfolio de Jonathan LUEMBE</h3>
      </div>
      <div className='flex justify-center py-3'>
        <p className='lg:text-base sm:text-sm ssm:text-xl  text-slate-300'>N'hésitez pas à me contacter pour toute proposition </p>
      </div>
      <div className='flex justify-center cursor-pointer gap-6'>
          <a href="https://www.github.com/JoeLeDev">
            <BsGithub size={27} className="border-4 hover:border-green-600 rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/jonathanluembe/">
            <BsLinkedin size={27} className="border-4 hover:border-green-600 rounded-full" />
            </a>
            <a href="mailto:jonathanluembe@yahoo.com">
            <IoIosMail size={27} className="border-4 hover:border-green-600 rounded-full"  />
            </a>
      </div>
    </div>
  )
}

export default Footer