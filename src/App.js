import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";

function App() {
  const [pathName, setPathname] = useState("#");
  return (
    <div className="relative">
      <Navbar pathName={pathName} setPathname={setPathname} />
      <Home pathName={pathName} setPathname={setPathname} />
      <AboutMe pathName={pathName} setPathname={setPathname} />
      <Services />
      <Project />
    </div>
  );
}

export default App;
