import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ category, title, bg }) => {
  const cardStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div
      className={
        `thumbnail text-white min-h-[500px] text-center relative hover:scale-110 z-0 transition duration-500 rounded-lg before:rounded-lg overflow-hidden before:opacity-0 before:hover:opacity-90 ` +
        before
      }
    >
      <div
        className="thumbnail-img rounded-lg hover:bg-none"
        style={cardStyle}
      ></div>
      <div className="absolute bottom-7 right-6 left-6 z-20">
        <p>{category}</p>
        <h1 className="text-2xl font-bold my-5">{title}</h1>
        <button
          className="border-2 px-4 py-2 rounded-md hover:bg-rose-500 hover:border-rose-500
        hover:-translate-y-2 transition duration-500 "
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

const before = `before:content-[''] before:bg-gradient-to-b before:from-rose-700 before:via-rose-500 before:to-black before:z-10 before:absolute before:top-0 before:left-0 before:h-full before:duration-500
before:w-full before:rounded-lg overflow-hidden `;
