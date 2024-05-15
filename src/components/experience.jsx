import HETIC from "../../assets/hetic.webp";
import UPEC from "../../assets/upec.webp";
import ICC from "../../assets/ICC.png";

const Experience = () => {

  return (
<div className="bg-green-900 py-10">
  <h1 className="text-5xl text-white my-10 text-center">
    Experience/Formation
  </h1>

 
  <div className="flex flex-wrap justify-center items-center xl:flex-nowrap gap-10 xl:gap-7 py-10 px-5">

   
    <div className="flex flex-col items-center text-center text-white">
      <img src={HETIC} alt="HETIC Logo" className="w-48 h-48 rounded-lg" />
      <div>
        <h2 className="text-2xl mb-2 mt-4">HETIC</h2>
        <p className="py-3">2022/2025</p>
        <p className="py-3">Bachelor développeur web</p>
        <ul className="list-disc list-inside">
          <li className="text-left">Programmation web</li>
          <li className="text-left">Conception web et UX/UI</li>
          <li className="text-left">Gestion de projets web</li>
        </ul>
      </div>
    </div>

   
    <div className="flex flex-col items-center text-center text-white">
      <img src={UPEC} alt="UPEC Logo" className="w-52 h-48 rounded-lg" />
      <div>
        <h2 className="text-2xl mb-2 mt-4">UPEC</h2>
        <ul className="list-disc list-inside">
        <p className="py-3">2017</p>
        <p className="py-3">Licence Langues étrangères appliquées</p>
          <li className="text-left">Études approfondie des langues étrangères</li>
          <li className="text-left">Approche interculturelle</li>
          <li className="text-left">Formation de commerce international</li>
        </ul>
      </div>
    </div>

    <div className="flex flex-col items-center text-center text-white">
      <img src={ICC} alt="ICC Logo" className="w-48 h-48 rounded-lg" />
      <div>
        <h2 className="text-2xl mb-2 mt-4">ICC</h2>
        <ul className="list-disc list-inside">
          <p className="py-3">2023/2025</p>
          <p className="py-3">Alternance</p>
          <li className="text-left">Développement full-stack</li>
          <li className="text-left">Gestion de projet</li>
          <li className="text-left">UX/UI design</li>
        </ul>
      </div>
    </div>
  </div>
</div>

       
  );
};

export default Experience;
