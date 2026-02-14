import { useEffect, useState } from "react"
import "./Socials.css"



function Socials() {
    const [socialsData, setSocialsData] = useState([])

    const url = 'https://raw.githubusercontent.com/Gkhundadze/educity-react-portfolio-data/refs/heads/main/socials_data.json'


    

   async function getData() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            
            setSocialsData(result)
        } catch (error) {
            console.error(error.message);
        }
    }


    useEffect(() => {
        getData()
    }, [])


  return (
    <ul className="socials-wrapper">
        {
            socialsData.map(social => {
                return (
                    <li className="social-item" key = {social.platform}>
                        <a href={social.profileUrl}>
                            <img src={social.logoUrl} alt={`${social.platform} logo` } />
                        </a>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Socials