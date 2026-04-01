import { useEffect, useState } from "react"
import "./Myskills.css"
import { Audio, Oval, ThreeDots } from 'react-loader-spinner'

function Myskills({skillsApi}) {
    const [skillsData, setSkillsData] = useState([])

    const skillsAPI = skillsApi
    async function getData() {
        if (skillsAPI != null) {
            try {
                const response = await fetch(skillsAPI);
                if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
                }
                const result = await response.json();
                

                setSkillsData(result)
                
                
            } catch (error) {
                console.error(error.message);
            }

        }else {
            console.error("skillsAPI URL is null or undefined")
        }
        }
    
        useEffect(() => {
            getData()
        }, [])

  return (
    <section className="myskills">
        <div className="skills-title">
            <h2>My <span>Skills</span></h2>
      
            
        </div>
        <div className="myskills-wrapper">
            {skillsData.length === 0 ? <Oval
                height={80}
                width={80}
                color="#341552"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#341552"
                strokeWidth={4}
                strokeWidthSecondary={4}
            /> : 
                skillsData.map(skill => {
                    return (
                        <div key= {skill.skillTitle} className="skill-card">
                            <img src={skill.logo} alt={skill.skillTitle} />
                            <h3>{skill.skillTitle}</h3>
                         </div>
                    )
                })
            }

        </div>
    </section>
  )
}

export default Myskills