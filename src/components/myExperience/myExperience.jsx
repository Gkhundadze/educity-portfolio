import './myExperience.css'
import { useEffect, useState } from 'react'

function MyExperience({experienceApi}) {
  const [myExperienceData, setMyExperienceData] = useState([])
  
      const experienceAPI = experienceApi
      async function getData() {
          if (experienceAPI != null) {
              try {
                  const response = await fetch(experienceAPI);
                  if (!response.ok) {
                  throw new Error(`Response status: ${response.status}`);
                  }
                  const result = await response.json();
                  
                  
                  setMyExperienceData(result)
              } catch (error) {
                  console.error(error.message);
              }
  
          }else {
              console.error("experienceAPI URL is null or undefined")
          }
          }
      
          useEffect(() => {
              getData()
          }, [])
  
    return (
      <section className='my-experience'>
          <div className="inner-wrapper">
                <div className="myexperience-title">
                <h2>My <span>experience</span></h2>
            </div>
            <div className="myexperience-wrapper">
                {
                    myExperienceData.map(experience => {
                        return (
                            <article key={experience.id}>
                                <div className="card-header">
                                    <div>
                                        <img src={experience.logo} alt={experience.title} />
                                        <h3>{experience.title}</h3>
                                    </div>
                                    <span>{experience.date}</span>
                                </div>
                                <p>{experience.description}</p>
                            </article>
                        )
                    })
                }
    
            </div>
          </div>
      </section>
    )
  
}

export default MyExperience