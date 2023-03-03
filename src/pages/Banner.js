import React from "react";
import TypeAnimation from "react-type-animation";
import bg from "../assets/images/rays_bg-4d7eda9d.png";
import "./Home.css";

const Banner = () => {
  return (
    <header
      id="home"
      className="h-[600px] md:h-screen dark:bg-[#1e293b]  text-white flex items-center "
    >
      <img
        className="absolute left-[30%] top[-30%] z-5 w-[55%] h-[auto]  "
        src={bg}
        alt=""
      />
      <div className="md:container mx-auto">
        <div className="relative z-10 md:ml-10 ml-5">
          <p className="dark:text-gray-400 text-black">WELCOME TO MY WORLD</p>
          <h1 className="text-3xl dark:text-white text-gray-700 md:text-7xl font-bold mt-3">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600">
              Motalib Pathan
            </span>
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
                " MERN Developer",
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
          <div className="mt-10 ">
            <a
              href="https://drive.google.com/file/d/1swgpUH9eQijyP7hRAOA4TkxHHwx12jCN/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
              className="text-white border-2 border-rose-600 py-3 px-8 bg-rose-600 cursor-pointer rounded-md mt-10  duration-500 hover:bg-transparent z-10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
