import './Header.css'
import cv from '../../assets/cv/GrigoriKhundadze_EN.pdf'
import logo from "./../../assets/logo.svg"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'




export default function Header({ toggleTheme }) {
   
    useEffect(() => {
        
     
            
    }, [])

  return (
    
    <header >
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
                <div className='night-mode' onClick={() => toggleTheme()}>
                    <h1>aaa</h1>
                </div>
            </div>
        </div>
    </header>
  )
}
