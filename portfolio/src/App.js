import './App.css';
import Navbar from "./componets/navbar.js";
import HomeSection from "./componets/home.js";
import ProjectsSection from "./componets/projects.js";
import PersonalSection from "./componets/personal.js";
import UpButton from "./componets/up-button.js";

function App() {
  return (
    <div className="App">
    <Navbar />
    <HomeSection />
    <ProjectsSection />
    <PersonalSection />
    <UpButton />
    </div>
  );
}

export default App;
