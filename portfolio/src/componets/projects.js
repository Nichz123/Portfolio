import "./projects.css"
import iconStyx from "../assets/iconStyx.png"
import iconTorus from"../assets/iconTorus.png"
import iconWize from "../assets/iconWize.png"
import arrow from "../assets/arrow.png"

//1 Styx
//2 Torus
//3 Wize
class Project {
    constructor(title, description, icon, technologies) {
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.technologies = technologies;
    }
}

//1st Project - Styx Baseball Academy
const styx = new Project(
    "Styx Baseball Academy",
    "Styx Baseball Academy provides personalized baseball lessons for young athletes in the Dallas-Fort Worth area and I contribute to their goals by developing their website to meet their growing business's needs.",
    iconStyx,
    ["Wix", "APIs"]
);

//2nd Project - Torus
const torus = new Project(
    "Torus Transforms",
    "Torus Transforms is a non-profit that just released a new app to help connect immigrants with volunteers in order to facilitate learning and culture exchange. Over the summer, I helped debug and test their app inorder to ensure it's responsive design and sound functionaltiies.",
    iconTorus,
    ["React Native", "Jira", "Typescript"]
);

//3rd Project - Wize
const wize = new Project(
    "Wize Computing Academy",
    "Wize Computing Academy offers after-school and summer camp oppertunites for kids to learn about the wondourous world of STEM. As a teacher and web designer, I bring content and joy trhough both on their site and directly to the kids",
    iconWize,
    ["Wordpress"]
);

function ProjectTechnologies (
    { technologies }
) {
    return(
        <div className="project-technologies">
            { technologies?.map(tech => (
                <div className="project-tech">{tech}</div>
            ))}
        </div>
    )
}

function ProjectScreen (
    {
        num,
        icon,
        title,
        description,
        technologies
    }
) {
    var altText = "Logo of " + title
    var projectId = "project-" + num
    num++
    var nextProjectId = "#project-" + num
    return (
        <div className = "section-item-projects" id={projectId}>
            <div className="image-and-title-projects">
                <img className="image-item-projects" src={icon} alt={altText}></img>
                <div className="textContainer">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="textContainer">
                <p>{description}</p>
            </div>
            <ProjectTechnologies technologies={technologies}/>
            <a href={nextProjectId}><img className="button" alt="arrow button" src={arrow}></img></a>
        </div>
    )
}

function ProjectsSection() {
    return (
        <div className = "section-content" id="section-content-projects">
            <ProjectScreen num="1" icon={styx.icon} title={styx.title} description={styx.description} technologies={styx.technologies}/>
            <ProjectScreen num="2" icon={torus.icon} title={torus.title} description={torus.description} technologies={torus.technologies}/>
            <ProjectScreen num="3" icon={wize.icon} title={wize.title} description={wize.description} technologies={wize.technologies}/>
        </div>
    )
};

export default ProjectsSection;