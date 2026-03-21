import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Header from './components/header/Header'
import MyExperience from './components/myExperience/myExperience'
import Myskills from './components/myskills/Myskills'
import Welcome from './components/welcome/Welcome'
import About from "./components/about/About";
import MyProjects from "./components/myProjects/MyProjects";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";



function App() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { language, toggleLanguage } = useContext(LanguageContext)

    const skillsUrl = "https://raw.githubusercontent.com/Gkhundadze/educity-react-portfolio-data/refs/heads/main/skills_data.json"
    const experienceUrl = 'https://raw.githubusercontent.com/Gkhundadze/educity-react-portfolio-data/refs/heads/main/myexperience-data.json'
    const projectsUrl = "https://raw.githubusercontent.com/Gkhundadze/educity-react-portfolio-data/refs/heads/main/projects-data.json"
    const aboutUrl = "https://raw.githubusercontent.com/Gkhundadze/educity-react-portfolio-data/refs/heads/main/about-data.json"
    useEffect(() => {
        console.log( theme )
    }, [theme])

    useEffect(() => {
        console.log(language)
    }, [language])
    return (
        <>
            <Header toggleTheme={toggleTheme} />

            <Routes>

                <Route path="/" element={<Welcome  />} />
                <Route path="/about" element={<About aboutApi={aboutUrl}  />} />
                <Route path="/experience" element={<MyExperience experienceApi={experienceUrl}  />} />
                <Route path="/projects" element={<MyProjects projectsApi={projectsUrl}  />} />
                <Route path="/skills" element={<Myskills skillsApi={skillsUrl}  />} />

            </Routes>

            { }

            {/* <Myskills skillsApi={skillsUrl} /> */}
            {/* <MyExperience experienceApi={experienceUrl}/> */}
            {/* <Welcome  />
    <Myskills /> */}

        </>
    )
}

export default App
