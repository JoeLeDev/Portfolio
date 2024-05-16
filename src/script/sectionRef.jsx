import React, { createContext, useRef } from 'react';


const SectionRefsContext = createContext();

// Exporter le provider personnalisé
export const SectionRefsProvider = ({ children }) => {
  const experience = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);

  // Le value contiendra les refs et toutes autres valeurs nécessaires
  const value = {experience, skills, project};

  return (
    <SectionRefsContext.Provider value={value}>
      {children}
    </SectionRefsContext.Provider>
  );
};


export default SectionRefsContext;
