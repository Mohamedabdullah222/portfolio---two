import React from "react";
import { work } from "../data/Work";
import { PiPaperPlaneTilt, PiPaperPlaneTiltFill } from "react-icons/pi";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {work.map((work) => (
          <div
            key={work.id}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${work.icon})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-700 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{work.name}</h2>
                <p className="text-sm text-gray-700">{work.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a href={work.link} target="__blank">
                  <PiPaperPlaneTiltFill className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Soon  */}
      {/* <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
            </a> */}
    </div>
  );
};

export default Work;
