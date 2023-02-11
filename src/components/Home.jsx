import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="font-bold text-4xl sm:text-7xl text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love to work on web application using technologies like
            React,Tailwind,Nodejs,MongoDB.
          </p>

          <div className="flex flex-row ">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href="/resume.pdf"
              download={true}
              className="group text-white w-fit px-6 py-3 my-2 ml-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Download CV
              <span className="group-hover:scale-150 duration-300">
                <AiOutlineCloudDownload size={20} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl max-w-xl w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
