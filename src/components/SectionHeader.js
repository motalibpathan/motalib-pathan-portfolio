import React from "react";

const SectionHeader = ({ title, desc1, desc2 }) => {
  return (
    <div className="text-white text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-gray-400">{desc1}</p>
      <p className="text-gray-400">{desc2}</p>
    </div>
  );
};

export default SectionHeader;
