import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-1 gap-8">
        <div className="col-span-2">
          <p className="pt-12 uppercase text-xl tracking-widest text-[#A62345]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
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
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full lg:w-[700px] h-auto m-auto  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json"
          ></Player>
        </div>
      </div>
    </div>
  );
};

export default About;
