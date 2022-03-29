import React from "react";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";

const Services = () => {
  const title = "My Latest Project";
  const desc1 =
    "There are many variations of passages of Lorem Ipsum available,";
  const desc2 = " but the majority have suffered alteration.";

  return (
    <div
      id="portfolio"
      className="md:min-h-screen bg-[#191919] py-32 px-7 md:px-0"
    >
      <SectionHeader title={title} desc1={desc1} desc2={desc2} />
      <div className="md:w-4/6 mx-auto grid md:grid-cols-3 grid-cols-1 gap-14 my-14">
        <ProjectCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg"
          }
        />
        <ProjectCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-2.jpg"
          }
        />
        <ProjectCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-3.jpg"
          }
        />
        <ProjectCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-4.jpg"
          }
        />
        <ProjectCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-3.jpg"
          }
        />
        <ProjectCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-4.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Services;
