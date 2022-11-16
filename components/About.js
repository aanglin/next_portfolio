import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who Am I</h2>
          <p className="py-2 text-gray-600">
            I am your cooking front-end developer
          </p>
          <p className="py-2 text-gray-600">
            I have worked in the food industry for over 20 years in many
            different levels. I was a cook and a manager and an operating
            partner. I have always loved technology and working with computers.
            I bought my first computer at 17 years old. I then upgraded the
            computers graphics card myself. My passion started to grow.
          </p>
          <p className="py-2 text-gray-600">
            As time passed I made the decision to leave the career that I also
            loved doing to pursue developement. I recently earned a certificate
            in full stack development from the University of Texas Austin Coding
            Bootcamp, with newly developed skills in JavaScript, CSS, Node.js,
            Mysql2, MongoDB, React.js, and responsive web design. Known as a
            hard-worker who focuses on developing code that solves the problem
            at hand, and as a team player looking to help where needed.. With
            each project, my aim is to best engage my audience for an impactful
            user experience. I am excited to leverage my skills as part of a
            fast-paced, quality-driven team to build better experiences with an
            application..
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/about.jpg"
            alt="/"
            width="500"
            height="60"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
