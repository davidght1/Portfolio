import React from "react";
import amazona from "../assets/portfolio/amazona.jpg";
import blog from "../assets/portfolio/blog.jpg";
import pinvent from "../assets/portfolio/pinvent.jpg";
import sport from "../assets/portfolio/sport.jpg";
import rick from "../assets/portfolio/rick.jpg";
import fashion from '../assets/portfolio/fashion.jpg'
const Portfolio = () => {
  const portfolios = [
    {
      id: 0,
      src: pinvent,
      demo: "https://pinvent-frontend-nine.vercel.app/",
      code: "https://github.com/davidght1/Pinvent",
    },
    {
      id: 1,
      src: fashion,
      demo: "https://ecommerce-shop-starter-main.vercel.app/",
      code: "https://github.com/davidght1/ecommerce-shop-starter-main",
    },
    {
      id: 2,
      src: amazona,
      demo: "https://mern-amazona-app-2gxt.onrender.com",
      code: "https://github.com/davidght1/amazonMern",
    },
    {
      id: 3,
      src: rick,
      demo: "https://rick-and-morty-davidght1.vercel.app",
      code: "https://github.com/davidght1/RickAndMorty",
    },
    {
      id: 4,
      src: sport,
      demo: "https://sports-task.vercel.app",
      code: "https://github.com/davidght1/SportsTask",
    },
    {
      id: 5,
      src: blog,
      code: "https://github.com/davidght1/Mern-Blog",
    },
  ];
  const handleDemoClick = (url) => {
    window.open(url, "_blank");
  };

  const handleCodeClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pd-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="MyProjects"
                className="rounded-md duration-200 hover:scale-105"
              ></img>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoClick(demo)}
                  disabled={!demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(code)}
                  disabled={!code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
