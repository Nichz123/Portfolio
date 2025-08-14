import "./projects.css"
import iconStyx from "../assets/iconStyx.png"
import iconTorus from"../assets/iconTorus.png"
import iconWize from "../assets/iconWize.png"

function ProjectsSection() {
    return (
        <div className = "section-content" id="section-content-projects">
            <div className = "section-item-projects">
                <img className="image-item-projects" src={iconStyx} alt="Logo of Styx Basebal Academy"></img>
                <div className="textContainer">
                    <h1>Styx Baseball Academy</h1>
                    <p>I worked here.</p>
                </div>
            </div>
            <div className = "section-item-projects">
                <img className="image-item-projects" src={iconTorus} alt="Logo of Torus Transforms"></img>
                <div className="textContainer">
                    <h1>Torus Transforms</h1>
                    <p>I worked here.</p>
                </div>
            </div>
            <div className = "section-item-projects">
                <img className="image-item-projects" src={iconWize} alt="Logo of Wize Computing Academy"></img>
                <div className="textContainer">
                    <h1>Wize Computing Academy</h1>
                    <p>I worked here.</p>
                </div>
            </div>
        </div>
    )
};

export default ProjectsSection;