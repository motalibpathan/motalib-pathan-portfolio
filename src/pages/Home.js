import React from "react";
import TypeAnimation from "react-type-animation";
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
            Hi, I'm Motalib Pathan
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold md:my-4 my-0 text-rose-600">
            <TypeAnimation
              cursor={true}
              sequence={[
                " JS Developer",
                2000,
                " Front End Developer",
                2000,
                " React Developer",
                2000,
                " MERN Stack Developer",
                2000,
                " Graphics Designer",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="after:text-white after:content-['|']"
            />
          </h2>
          {/* <h4 className="text-xl md:text-5xl font-bold">based in USA.</h4> */}
          <div className="mt-10">
            <a
              href="#contact"
              className="hover:text-white border-2 border-rose-600 bg-rose-600 py-3 px-9 cursor-pointer rounded-md mt-10
          bg-transparent text-rose-600 duration-500"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
