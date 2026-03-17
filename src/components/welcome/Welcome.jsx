import './Welcome.css'
import Socials from "../socials/Socials";
import banner from "../../assets/banner.svg"


function Welcome( {isDark} ) {


  return (
    <section className={`welcome ${isDark ? 'dark' : ''}`}>
        <div className="container">
            <div className="welcome-wrapper">
                <div className="text-content">
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, nesciunt quam non eaque nobis ipsam libero, rem nostrum ullam, beatae vero suscipit. Sint quam praesentium sequi maxime facere dolorum commodi. Recusandae sunt aperiam excepturi corporis, alias itaque! Id, consequatur repellendus.</p>
                    <Socials  />
                </div>
                <div className="image-content">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    </section>
  )
}




export default Welcome