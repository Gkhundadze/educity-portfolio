import { useEffect, useState } from 'react'
import xpCover from '../../assets/exp-cover-image.png'

import './MyProjects.css'

function MyProjects({projectsApi}) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(projectsApi)
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])


  return (
    <section className="my-projects">
        <div className="container">
            <div className="title">
                <h2>My <strong>Projects</strong></h2>
            </div>
            <div className="projects-wrapper">
                {
                    projects.map((project) => (
                        <article className={`project-card ${(project.id % 2 == 0) ? 'reverse' : ''}`} key={project.id}>
                            <div className="cover">
                                <img src={project.cover} alt={project.title} />
                            </div>
                            <div className="info">
                                <div className="order">{project.order}</div>
                                <h3 className="project-title">{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    Visit Project
                                </a>
                            </div>
                        </article>
                    ))
                }


                {/* <article className="project-card">
                    <div className="cover">
                        <img src={xpCover} alt="Project Cover" />
                    </div>
                    <div className="info">
                        <div className="order">01</div>
                        <h3 className="project-title">Project Title</h3>
                        <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                        <a href="#">visit</a>
                    </div>
                </article>
                <article className="project-card ">
                    <div className="info">
                        <div className="order">02</div>
                        <h3 className="project-title">Project Title</h3>
                        <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                        <a href="#">visit</a>
                    </div>
                    <div className="cover">
                        <img src={xpCover} alt="Project Cover" />
                    </div>
                    
                </article>
                <article className="project-card">
                    <div className="cover">
                        <img src={xpCover} alt="Project Cover" />
                    </div>
                    <div className="info">
                        <div className="order">03</div>
                        <h3 className="project-title">Project Title</h3>
                        <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                        <a href="#">visit</a>
                    </div>
                </article> */}
                
            </div>
          
        </div>
    </section>
  )
}




export default MyProjects