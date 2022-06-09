import React from "react";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";

const Services = () => {
  const title = "My Latest Project";
  const desc1 =
    "These projects development with HTML, CSS, JavaScript, Rest API";
  const desc2 = " React JS, Node JS, Mongodb, Firebase, Git, Heroku";

  return (
    <div
      id="portfolio"
      className="md:min-h-screen dark:bg-black bg-gray-50 py-32 px-7 md:px-0"
    >
      <SectionHeader title={title} desc1={desc1} desc2={desc2} />
      <div className="md:w-4/6 mx-auto grid md:grid-cols-3 grid-cols-1 gap-14 my-14">
        <ProjectCard
          category={"Mern Stack Project"}
          title="Spadex Tools"
          bg={"/project/spadexToolThumbnail.PNG"}
        />
        <ProjectCard
          category={"Mern Stack Project"}
          title="Inventory Management"
          bg={"/project/carMax.PNG"}
        />
        <ProjectCard
          category={"Mern Stack Project"}
          title="Red Onion Website"
          bg={"/project/RedOnion.PNG"}
        />
        <ProjectCard
          category={"Development"}
          title="Service Provider Website"
          bg={"/project/ericPhotography.PNG"}
        />
        <ProjectCard
          category={"Development"}
          title="Dashboard Project "
          bg={"/project/salesTracker.PNG"}
        />
        <ProjectCard
          category={"Development"}
          title="Food Choose Project"
          bg={"/project/khabarLagbe.PNG"}
        />
      </div>
      {/* <div className="text-center ">
        <Button btnText={"VIEW MORE"} />
      </div> */}
    </div>
  );
};

export default Services;
