import React from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../public/assets/143896-user-interface-animation-loop.json";
import Computer from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#027368] font-extrabold ">
            About
          </p>
          <h2 className="py-4">Who Am I</h2>
          <p className="py-2 ">
            I am your cooking front-end developer
          </p>
          <p className="py-2 ">
            I have worked in the food industry for over 20 years in many
            different levels. I started off as a cook, worked my way up to a
            manager and ultimately became an Operating Partner. I have always
            loved technology and working with computers. I bought my first
            computer at 17 years old. I then upgraded the computers graphics
            card myself. My passion for technology was ignited and continues to
            grow.
          </p>
          <p className="py-2 ">
            I loved my career in the food industry. After some time passed, I
            made the decision to pursue software development. I recently earned
            a certificate in full stack development from the University of Texas
            Austin Coding Bootcamp, with newly developed skills in JavaScript,
            CSS, Node.js, Mysql2, MongoDB, React.js, and responsive web design.
            Known as a hard-worker who focuses on developing code that solves
            the problem at hand, and as a team player looking to help where
            needed.. With each project, my aim is to best engage my audience for
            an impactful user experience. I am excited to leverage my skills as
            part of a fast-paced, quality-driven team to build better
            experiences with an application..
          </p>
          <Link href="/#projects">
            <p className="py-2 underline cursor-pointer">
              Check out my projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Lottie animationData={animationData} />
          {/* <Image
            src={Computer}
            alt="/"
            width="500"
            height="60"
            className="rounded-xl"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
