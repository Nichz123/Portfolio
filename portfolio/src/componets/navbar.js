import { useMediaQuery } from "@uidotdev/usehooks";
import name from "../assets/name.png"
import menu from "../assets/menu.png"
import './navbar.css';

function Navbar() {
    if(useMediaQuery('(min-width:1200px)')) {
        return (
            <div>
                <nav className="navContainer">
                    <div>
                        <img id="name" src={name} alt="logo" width="300px"></img>
                    </div>
                    <div className="navLinks">
                        <div>
                            <a className="navlink" href="#top">Introductions</a>
                        </div>
                        <div>
                            <a className="navlink" href="#section-content-projects">Professional Experience</a>
                        </div>
                        <div>
                            <a className="navlink" href="#section-content-personal">Personal Works</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    } else {
        return (
        <div>
            <nav className="navContainer">
                <div>
                    <img id="name" src={name} alt="logo" width="300px"></img>
                </div>
                <div>
                    <input type="checkbox" id="check"></input><img id="menu" className="dropbtn" src={menu} alt="Menu button" width="50px"></img>
                    <div class="dropdown-content">
                        <a className="navlink-dropdown" href="#section-content-home">Introductions</a>
                        <a className="navlink-dropdown" href="#section-content-projects">Profesional Experience</a>
                        <a className="navlink-dropdown" href="#section-content-personal">Personal works</a>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;