import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <header
      id="home"
      className="h-96 md:h-screen bg-black text-white flex items-center"
    >
      <div className="md:container mx-auto">
        <div className="md:ml-10 ml-5">
          <p className="text-gray-400">WELCOME TO MY WORLD</p>
          <h1 className="text-3xl md:text-7xl font-bold mt-3">
            Hi, I'm John Doe
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold md:my-4 my-0 text-rose-500">
            MERN Stack Developer
          </h2>
          <h4 className="text-xl md:text-5xl font-bold">based in USA.</h4>
        </div>
      </div>
    </header>
  );
};

export default Home;
