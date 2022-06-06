import React from "react";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div id="contact" className="dark:bg-[#191919] bg-gray-50 py-10">
      <div className="w-2/3 mx-auto py-20 flex items-center gap-14">
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl font-bold dark:text-white text-gray-700">
            Hire Me.
          </h1>
          <p className="text-gray-500 my-5">
            I am available for freelance work. Connect with me via phone:{" "}
            <span className="text-white">01684 352102</span> or email:{" "}
            <span className="text-white">admin@example.com</span>
          </p>
          <div className="flex flex-col">
            <input
              type="text"
              className="dark:bg-[#191919] bg-gray-50 my-3 p-3 rounded dark:text-white text-gray-700 focus-within:outline-none border-2 border-slate-700"
              placeholder="Your Name *"
            />
            <input
              type="text"
              className="dark:bg-[#191919] bg-gray-50 my-3 p-3 rounded dark:text-white text-gray-700 focus-within:outline-none border-2 border-slate-700"
              placeholder="Your Email *"
            />
            <input
              type="text"
              className="dark:bg-[#191919] bg-gray-50 my-3 p-3 rounded dark:text-white text-gray-700 focus-within:outline-none border-2 border-slate-700"
              placeholder="Subject"
            />
            <textarea
              className="dark:bg-[#191919] bg-gray-50 my-3 p-3 rounded dark:text-white text-gray-700 focus-within:outline-none border-2 border-slate-700"
              placeholder="Your Message"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <Button btnText={"Submit"} />
        </div>
        <div className="w-full md:w-1/2">
          <img src="about-8.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
