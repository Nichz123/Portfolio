import name from "../assets/name.png"
import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navContainer">
                <div>
                    <img id="name" src={name} alt="logo" width="300px"></img>
                </div>
                <div className="navLinks">
                    <div>
                        <a className="navlink" href="#home">Home</a>
                    </div>
                    <div>
                        <a className="navlink" href="#about">About me</a>
                    </div>
                    <div>
                        <a className="navlink" href="#projects">Projects</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;