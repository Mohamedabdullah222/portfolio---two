import React from 'react';
import { data, tools } from '../data/About';

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Left Side - Image */}
        <div className="max-w-max mx-auto relative">
          <img
            src="./assets/WhatsApp Image 2025-09-18 at 17.17.08_c0b1de53.jpg"
            alt="User"
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              src="./assets/circular-text.png"
              alt="Circular Text"
              className="w-full animate-spin_slow"
            />
            <img
              src="./assets/10017f98303ce873c8fbf53d28fcee99.jpg"
              alt="Dev Icon"
              className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1">
          <p className="mb-6 max-w-2xl font-Ovo text-gray-700 dark:text-white/90 leading-relaxed">
            I’m a Front-End Developer based in Mansoura, Egypt, with 2+ years of experience in building user-friendly and responsive web interfaces. I enjoy crafting accessible, performant, and pixel-perfect front-end applications that deliver smooth user experiences.
          </p>

          <ul className="list-disc pl-5 mb-10 text-gray-700 dark:text-white/80 space-y-2 text-[15px]">
            <li><strong>Tech Stack:</strong> HTML5, CSS3, Bootstrap, JavaScript (ES6), React.js, Tailwind CSS, Redux Toolkit, Firebase</li>
            <li><strong>UI/UX Tools:</strong> Figma, Adobe XD</li>
            <li>Strong expertise in responsive design, performance optimization, and integrating RESTful APIs</li>
            <li>Passionate about writing clean, maintainable code and delivering seamless user experiences across all devices</li>
          </ul>

          {/* Data Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map((item) => (
              <li
                key={item.name}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
              >
                <img src={item.icon1} alt={item.name} className="w-7 mt-3 dark:hidden" />
                <img src={item.icon2} alt={item.name} className="w-7 mt-3 hidden dark:block" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{item.description}</p>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I Use</h4>

          <ul className="flex items-center flex-wrap gap-3 sm:gap-5">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
