import React from "react";
import ExperienceTab from "../components/ExperienceTab";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full lg:h-screen dark:bg-[#191919] bg-gray-50 flex items-center dark:text-gray-400 text-gray-600 p-5"
    >
      <div className="md:container mx-auto grid lg:grid-cols-12 grid-cols-1">
        <div className="col-span-5 p-4">
          <img
            className="w-full"
            src="http://trydo.rainbowit.net/assets/images/about/about-8.jpg"
            alt=""
          />
        </div>
        <div className="col-span-7 flex items-center p-4">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold dark:text-white text-gray-900">
              About Me
            </h1>
            <p className="my-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum,
            </p>
            <ExperienceTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
