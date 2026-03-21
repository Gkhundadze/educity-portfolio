import { createContext, useEffect, useState, useMemo } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";
export const ThemeContext = createContext('light')


export function ThemeProvider ({children}) {
    const [theme, setTheme] = useState('light')


  // Load saved theme (once)
  useEffect(() => {
    const savedTheme = getFromLocalStorage("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    saveToLocalStorage("theme", theme);
  }, [theme]);

   // Toggle
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

    // Memo value
  const value = useMemo(() => {
    return {
      theme,
      toggleTheme,
      setTheme,
    };
  }, [theme]);



  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );


}