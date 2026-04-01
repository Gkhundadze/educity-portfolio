import './Header.css'
import cv from '../../assets/cv/GrigoriKhundadze_EN.pdf'
import logo from "./../../assets/logo.svg"
import { Link } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import {ThemeContext} from "../../contexts/ThemeContext"
import { LanguageContext } from '../../contexts/LanguageContext'
import { ToastContainer } from 'react-toastify';




export default function Header({  }) {
   const { toggleTheme, theme } = useContext(ThemeContext)
   const { language, toggleLanguage } = useContext(LanguageContext)




    useEffect(() => {
        
     console.log(language)
     console.log(theme)
            
    }, [theme])

  return (
    
    <header >
        <ToastContainer theme={theme==='light'? 'dark': 'light'} />
        <div className="container">
            <div className="header-wrapper">
                <div className="logo">
                    
                    <Link to="/"> 
                        <img src={logo} alt="logo" /> 
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact me</Link>
                        </li>
                    </ul>
                </nav>
                <div className="cta-wrapper">
                    <a href={cv} download>download</a>
                </div>
                <div 
                    className='night-mode' 
                    onClick={() => {
                        toggleTheme()
                        
                    }}

                >
                    <h1>aaa</h1>
                </div>
                <div>
                    <button className='language-toggle' onClick={toggleLanguage}>
                        {language === "en" ? "GE" : "EN"}
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}
