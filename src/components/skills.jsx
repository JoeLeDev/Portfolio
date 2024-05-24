import React, {useContext} from 'react'
import Hardskills from '../../assets/Hardskills.jpeg'
import SoftSkills from '../../assets/SoftSkills.png'
import SectionRefsContext from '../script/sectionRef'

const Skills = () => {

    const { skills } = useContext(SectionRefsContext)

  return (

<div ref={skills} className='text-white bg-green-900 py-10'>
    <h1 className="text-center text-5xl my-10 xl:text-6xl ssm:text-5xl  text-slate-300">Compétence</h1>

    <div className='flex flex-wrap justify-center items-center gap-14 pb-20 sm:text-base ssm:text-xl'>
        <img src={Hardskills} alt="Hard Skills" className="w-full xl:w-[777px] xl:h-[350px] lg:h-[300px] lg:w-[500px] sm:h-[250px] sm:w-[300px] ssm:w-[400px]" />
        <div className="mt-2 lg:text-lg xl:text-3xl max-w-lg xl:max-w-4xl ">
            <h2 className='text-6xl pb-9 lg:text-4xl sm:text-4xl ssm:text-5xl'>Hard Skills</h2>
            <p>Je suis plus à l’aise avec la partie front end du développement web, je maîtrise donc HTML, CSS et j’ai une bonne base en React.</p>
            <p>Côté design j’ai également une bonne maitrise de Figma pour la création de maquettes et de la suite Adobe pour l’optimisation des images.</p>
            <p>A côté de ça j’ai des notions en API REST et avec le framework Express pour la partie back end.</p>
        </div>
    </div>

    <div className='flex flex-wrap justify-center items-center gap-14 sm:text-base ssm:text-xl'>
        <img src={SoftSkills} alt="Soft Skills" className="w-full xl:w-[777px] xl:h-[350px] lg:h-[300px] lg:w-[500px] sm:h-[250px] sm:w-[300px] ssm:w-[400px]" />
        <div className="mt-2 lg:text-lg xl:text-3xl max-w-lg xl:max-w-4xl ">
            <h2 className='text-6xl pb-9 lg:text-4xl sm:text-4xl ssm:text-5xl'>Soft Skills</h2>
            <p>En plus de ma maîtrise en programmation, mes compétences sont renforcées par mon esprit d’équipe développé lors de mes expériences passées en banque back office et ma capacité
                à communiquer acquise grâce aux projets réalisés en cours.</p>
            <p>Mon adaptabilité provient également de mon expérience dans des projets variés, et je suis autonome dans mon travail, ce qui me permet de contribuer efficacement aux projets
                d’équipe.</p>
        </div>
    </div>
</div>

  )
}

export default Skills
