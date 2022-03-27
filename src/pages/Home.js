import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <header className="h-96 md:h-screen bg-black text-white flex items-center">
      <div className="md:container mx-auto">
        <div className="md:ml-10 ml-0">
          <p>WELCOME TO MY WORLD</p>
          <h1 className="text-4xl md:text-7xl font-bold">Hi, I’m Jone Doe</h1>
          <h2 className="text-4xl md:text-6xl font-bold my-4 text-rose-500">
            UI/UX Designer.
          </h2>
          <h4 className="text-4xl md:text-5xl font-bold">based in USA.</h4>
        </div>
      </div>
    </header>
  );
};

export default Home;
