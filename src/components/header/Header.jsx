import './Header.css'
import cv from '../../assets/cv/GrigoriKhundadze_EN.pdf'
import logo from "./../../assets/logo.svg"





function Header() {
  return (
    <header>
        <div className="container">
            <div className="header-wrapper">
                <div className="logo">
                    <a href="#"> 
                        <img src={logo} alt="logo" /> 
                    </a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">About Me</a>
                        </li>
                        <li>
                            <a href="#">Skills</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contact me</a>
                        </li>
                    </ul>
                </nav>
                <div className="cta-wrapper">
                    <a href={cv} download>download</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header