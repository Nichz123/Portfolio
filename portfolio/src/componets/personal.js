import { useMediaQuery } from "@uidotdev/usehooks";
import "./personal.css"

export default function PersonalSection () {
    if(useMediaQuery('(min-width:1200px)')) {
        return (
            <div className="section-content" id="section-content-personal">
                <h1>Personal Works</h1>
                <div className="projects-section">
                    <div className="list-projects">
                        <div className="list-item">Fantasy Text Adventure</div>
                        <div className="list-item">ADHD Task Manager</div>
                        <div className="list-item">Osovalda - ESL Learning</div>
                    </div>
                    <div className="preview-project-content">
                        <p>This is a preview</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
        <div className="section-content" id="section-content-personal">
            <h1>Personal Works</h1>
            <div className="projects-section">
                <div className="project-selector">
                    <span className="project-selector-button">Select a project &nbsp;&nbsp;&nbsp; ▼</span>
                </div>
                <input type="checkbox" className="project-selector-check"></input>
                <div className="list-projects">
                    <div className="list-projects-align">
                        <div className="list-item">Fantasy Text Adventure</div>
                        <div className="list-item">ADHD Task Manager</div>
                        <div className="list-item">Osovalda - ESL Learning</div>
                    </div>
                </div>
                <div className="preview-project-content">
                    <p>This is a preview</p>
                </div>
            </div>
        </div>
        )
    }
}