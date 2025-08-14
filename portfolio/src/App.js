import './App.css';
import Navbar from "./componets/navbar.js";
import HomeSection from "./componets/home.js";
import ProjectsSection from "./componets/projects.js";

function App() {
  return (
    <div className="App">
    <Navbar />
    <HomeSection />
    <ProjectsSection />
    </div>
  );
}

export default App;
