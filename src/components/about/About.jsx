import { useEffect, useState, useContext } from "react";
import "./About.css";
import { LanguageContext } from "../../contexts/LanguageContext";

function About({ aboutApi }) {
  const [aboutData, setAboutData] = useState(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    fetch(aboutApi)
      .then((res) => res.json())
      .then((data) => setAboutData(data)) // ✅ FIXED
      .catch((err) => console.error(err));
  }, [aboutApi]);

  // ✅ prevent crash before data loads
  if (!aboutData) return <p>Loading...</p>;

  // ✅ choose correct language block once
  const currentData =
    language === "en" ? aboutData.aboutEN : aboutData.aboutGE;

  return (
    <section className="about">
      <div className="container">
        <div className="about-wrapper">
          
          <div className="image">
            <img src={currentData.image} alt="About" />
          </div>

          <div className="text">
            <h2>{currentData.title}</h2>

            {currentData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;