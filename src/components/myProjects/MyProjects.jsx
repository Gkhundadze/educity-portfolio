import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
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
                    projects.length === 0 ? 
                    <p>Loading...</p> 
                    :
                    <Swiper 
                    spaceBetween={20}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                {
                    projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <article className={`project-card ${(project.id % 2 == 0) ? 'reverse' : ''}`}>
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
                        </SwiperSlide>
                    ))
                }
                </Swiper>


                }

                
            </div>
          
        </div>
    </section>
  )
}




export default MyProjects