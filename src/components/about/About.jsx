
import { useEffect, useState } from "react";
import myImage from "../../assets/me.svg";
import './About.css'

function About({aboutApi}) {
    const [aboutData, setAboutData] = useState({})

    useEffect(() => {
        fetch(aboutApi)
        .then(res => res.json())
        .then(data => setAboutData(data.about))
    }, [])

  return (
    <section className="about">
        <div className="container">
            <div className="about-wrapper">
               

                <div className="image">
                    <img src={aboutData.image} alt="My Image" />     
                </div>
                <div className="text">
                    <h2>{aboutData.title}</h2>
                    {aboutData.paragraphs && aboutData.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    
                </div>
            </div>



        </div>
    </section>
  )
}




export default About