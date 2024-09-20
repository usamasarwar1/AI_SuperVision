"use client";

import { useState, useEffect, createContext, useContext, useMemo } from "react";
import en from "../../../public/en.json"
import ar from "../../api/ar.json"

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
