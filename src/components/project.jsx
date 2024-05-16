import OnePiece from "../../assets/OnePiece.jpg";
import Runner from "../../assets/Runner.jpg";
import FocusList from "../../assets/FocusList.jpg";
import SectionRefsContext from "../script/sectionRef";
import { useContext } from "react";

const Project = () => {

    const { project } = useContext(SectionRefsContext)

  return (
    <div ref={project} className="bg-black p-32 xl:py-20 xl:px-27">
      <div className="text-center">
        <h1 className="text-5xl text-white my-10">Projets</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
        {/* One Piece Guessing Game Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="flex flex-col sm:flex-collumn lg:flex-row justify-between">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-black font-semibold">
                One Piece Guessing Game
              </div>
              <p className="mt-2 text-slate-500 lg:text-xl xl:text-2xl">
                Le projet « Guess the Pirate: One Piece Challenge » est une
                autre réalisation captivante qui met en évidence mes compétences
                en développement web. Ce jeu de devinette est basé sur l’univers
                de « One Piece », une série manga populaire. Dans ce jeu, les
                joueurs doivent deviner le nom du personnage affiché à l’écran
                en saisissant leur réponse dans un champ de texte à l’image d’un
                pendu avec un nombre de chance au nombre desept. J’ai développé
                ce projet en utilisant les langages HTML, CSS et JavaScript,
                démontrant ainsi ma maîtrise de ces technologies front-end et
                liant ma passion pour le manga avec mon futur métier.
              </p>
            </div>
            <div className="md:shrink-0">
              <a href="https://jeu-devinette-one-piece.vercel.app/">
                <img
                  src={OnePiece}
                  alt="One Piece"
                  className="w-full lg:w-[3300px] lg:h-[350px] xl:h-[500px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Focus List Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="flex flex-col sm:flex-collumn lg:flex-row justify-between">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-black font-semibold">
                Focus List
              </div>
              <p className="mt-2 text-slate-500 lg:text-xl xl:text-2xl">
                "FocusList" est une application de gestion de tâches conçue pour
                améliorer la productivité et l'organisation quotidienne.
                Développée avec React, cette application permet aux utilisateurs
                de gérer efficacement leurs tâches avec des fonctionnalités
                telles que l'ajout, la suppression, et la modification. Un
                système de sauvegarde automatique des données assure que vous ne
                perdez jamais le fil de vos activités, même en cas de fermeture
                inattendue de l'application.</p>
            </div>
            <div className="md:shrink-0">
              <a href="https://typescript-todo-2j4zg3p66-joeledevs-projects.vercel.app//">
                <img
                  src={FocusList}
                  alt="Focus List"
                  className="w-full lg:w-[2400px] lg:h-[350px] xl:h-[500px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* RunnerJS Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="flex flex-col sm:flex-collumn lg:flex-row justify-between">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-black font-semibold">
                RunnerJs
              </div>
              <p className="mt-2 text-slate-500 lg:text-xl xl:text-2xl">
                « RunnerJS » est un jeu de plateforme interactif que j’ai
                développé en utilisant les langages HTML, CSS et JavaScript.{" "}
                <br />
                Le jeu offre une expérience amusante où le joueur contrôle un
                personnage qui évite les obstacles et collecte des récompenses
                tout au long du parcours. <br />
                Il met en valeur mes compétences en développement web et ma
                passion pour la création d’expériences interactives engageantes.
                C’est d’ailleurs mon premier projet solo.
              </p>
            </div>
            <div className="md:shrink-0">
              <a href="https://runner-b29cw8fqy-joeledev.vercel.app">
                <img
                  src={Runner}
                  alt="Runner game screenshot"
                  className="w-full lg:w-[900px] lg:h-[350px] xl:h-[500px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
