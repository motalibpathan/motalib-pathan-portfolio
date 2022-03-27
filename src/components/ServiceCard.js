import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div
      className="service-card p-9 rounded-lg bg-[#191919] hover:bg-gradient-to-r hover:from-rose-600
    hover:to-red-600 hover:-translate-y-2 transition-transform duration-500 hover:text-white text-white"
    >
      <FontAwesomeIcon
        className="text-6xl text-rose-600 card-icon"
        icon={icon}
      />
      <h1 className="text-2xl md:text-4xl font-bold my-5">{title}</h1>
      <p className="text-gray-400 text-xl">{desc}</p>
    </div>
  );
};

export default ServiceCard;
