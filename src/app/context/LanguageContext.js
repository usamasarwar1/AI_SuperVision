"use client";

import { useState, useEffect, createContext, useContext, useMemo } from "react";

const LanguageContext = createContext();


export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={  {language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
