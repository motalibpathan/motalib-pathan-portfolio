import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Services />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
