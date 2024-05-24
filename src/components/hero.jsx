import React, { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoIosMail } from "react-icons/io";
import joe from '../../assets/joe.jpg';
import CV from '../../assets/CV.pdf';

const Hero = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <section className='flex xl:gap-7 gap-24 items-center lg:flex-row ssm:flex-col ssm:space-y-10 ssm:p-20 text-white'>
      <div className='max-w-fit'>
        <p className='text-4xl mb-5 text-slate-300'>Welcome I'm</p>
        <h1 className='text-6xl'>Jonathan LUEMBE</h1>
        <p className='mt-10 text-slate-300 font-sans'>
          Je suis étudiant en <br /> développement web et voici mon portfolio
        </p>
      </div>
      {!showMoreInfo && (
        <div className='items-center'>
          <img
            src={joe}
            alt=""
            className='xl:w-[450px] xl:h-[600px] lg:w-[350px] lg:h-[500px] sm:w-[400px] sm:h-[500px] ssm:w-[220px] ssm:h-[300px] rounded-full border-8 border-white'
          />
        </div>
      )}
      <div className='w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-4'>About me</p>
        <p className='text-slate-300 mb-2'>Age : 25 ans</p>
        <p className='text-slate-300 mb-2'>Métier : Développeur web</p>
        <button
          onClick={handleToggleInfo}
          className='bg-white text-black px-10 py-2 my-3 rounded-full hover:bg-green-800 hover:text-black'
        >
          {showMoreInfo ? 'Moins d\'infos' : 'Plus d\'infos'}
        </button>
        {showMoreInfo && (
          <div className='mt-4 text-slate-300'>
            Actuellement étudiant en deuxième année et passionné par le développement Web, j’ai le désir d’approfondir mes connaissances dans ce domaine en vue d’une carrière future. Mon objectif est de forger mon avenir dans le monde du développement web en apprenant constamment et en repoussant les limites de ma créativité. Chaque ligne de code que je tape me rapproche de ma vision d’une carrière réussie dans l’univers numérique.
            <br /> <a href={CV} target="_blank" rel="noopener noreferrer"> <button className='bg-white text-black px-10 py-2 my-3 rounded-full hover:bg-green-800 hover:text-black'>Voir mon cv</button> </a>
          </div>
        )}
        <div className='flex mt-5 space-x-4 cursor-pointer'>
          <a href="https://www.github.com/JoeLeDev">
            <BsGithub size={40} className="border-4 hover:border-green-600 rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/jonathanluembe/">
            <BsLinkedin size={40} className="border-4 hover:border-green-600 rounded-full" />
          </a>
          <a href="mailto:jonathanluembe@yahoo.com">
            <IoIosMail size={40} className="border-4 hover:border-green-600 rounded-full"  />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
