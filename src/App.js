import Navbar from "./components/Navbar";
import useDarkMode from "./Hooks/useDarkMode";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";

function App() {
  useDarkMode();
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Services />
      <Project />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
