import React from "react";
import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const Services = () => {
  const title = "Latest Blogs";
  const desc1 =
    "There are many variations of passages of Lorem Ipsum available,";
  const desc2 = " but the majority have suffered alteration.";

  return (
    <div
      id="blog"
      className="md:min-h-screen dark:bg-black bg-gray-100 py-32 px-7 md:px-0"
    >
      <SectionHeader title={title} desc1={desc1} desc2={desc2} />
      <div className="md:w-4/6 mx-auto grid md:grid-cols-3 grid-cols-1 gap-14 my-14">
        <BlogCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg"
          }
        />
        <BlogCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-2.jpg"
          }
        />
        <BlogCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-3.jpg"
          }
        />
        <BlogCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-4.jpg"
          }
        />
        <BlogCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-3.jpg"
          }
        />
        <BlogCard
          category={"Development"}
          title="Getting ticket to the big show"
          bg={
            "http://trydo.rainbowit.net/assets/images/portfolio/portfolio-4.jpg"
          }
        />
      </div>
      <div className="text-center ">
        <Button btnText={"VIEW MORE"} />
      </div>
    </div>
  );
};

export default Services;
