import { useEffect, useState } from "react"
import "./Myskills.css"


function Myskills() {
        const [skillsData, setSkillsData] = useState([])
    
    const url = "https://raw.githubusercontent.com/Gkhundadze/educity-react-portfolio-data/refs/heads/main/skills_data.json"
    async function getData() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            
            
            setSkillsData(result)
        } catch (error) {
            console.error(error.message);
        }

    }
    useEffect(() => {
        getData()
    }, [])
    
  return (
    <section>
        <div className="title">
            <h2>My <span>Skills</span></h2>
        </div>
        <div className="myskills-wrapper">
            {
                skillsData.map(skill => {
                    return (
                        <div key= {skill.skillTitle}>
                            {skill.skillTitle}
                         </div>
                    )
                })
            }

        </div>
    </section>
  )
}

export default Myskills