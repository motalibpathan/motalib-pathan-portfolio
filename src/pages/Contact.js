import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact Page</h1>
      <button
        onClick={() => console.log("clicked")}
        className="text-rose-500 font-bold cursor-pointer"
      >
        Click it
      </button>
    </div>
  );
};

export default Contact;
