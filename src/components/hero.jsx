import {BsGithub, BsLinkedin,} from 'react-icons/bs'
import joe from '../../assets/joe.jpg'

const Hero = () => {
  return (
        <section className='flex xl:gap-7 gap-24 items-center lg:flex-row ssm:flex-col
        ssm:space-y-10 ssm:p-20 text-white'>
            <div className='max-width: fit-content;'>
                <p className='text-4xl mb-5 text-slate-300'>Welcome I'm</p>
                <h1 className='text-6xl'>Jonathan LUEMBE</h1>
               
                <p className='mt-10 text-slate-300 font-sans'>Je suis étudiant en 
                développement <br /> web et  voici mon portfolio
                </p>
            </div>
            <div className=' items-center'>
            <img src={joe} alt="" className='xl:w-[450px] xl:h-[600px] lg:w-[350px] lg:h-[500px] sm:w-[400px] sm:h-[500px] ssm:w-[220px] ssm:h-[300px] rounded-full border-8 border-white'/>
            </div>
            <div className='w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-4'>About me</p>
                <p className='text-slate-300  mb-2'>Age : 25 ans </p>
                <p className='text-slate-300  mb-2'>Métier : Développeur web</p>
                <button className='bg-white text-black px-10 py-2 my-3 rounded-full
                 hover:bg-green-800 hover:text-black'> Plus d'infos
                 </button>
            <div className='flex mt-5 space-x-4 cursor-pointer'>
                <BsGithub size={40} className="border-4 hover:border-green-600 rounded-full"/>
                <BsLinkedin size={40} className="border-4 hover:border-green-600 rounded-full"/>
            </div>
            
            </div>

   
        </section>
  )
}

export default Hero
