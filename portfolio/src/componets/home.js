import portrait from "../assets/portrait.jpg"
import arrow from "../assets/arrow.png"
import "./home.css"


function HomeSection() {
    return (
        <div className="section-content">
            <div className="section-item">
                <img className="image-half-screen" src={portrait} alt="Selfie of Nihcolas Bruner at the White Sands National Park"></img>
            </div>
            <div className="textContainer">
                <h1>Hi, I'm Nicholas Bruner</h1>
                <p>
                    I am a passionate web and mobile developer as well as a recent graduate of the University of North Texas. In my free time I like to go outdoors, cook, and gain overall inspiration for my work.
                </p>
                <p>
                    In my portfolio I've listed some of my projects, highlighting my experience. Furthermore, I'm always only a call away!
                </p>
                <a><img className="home-button" alt="arrow button" src={arrow}></img></a>
            </div>
        </div>
    )
}

export default HomeSection;