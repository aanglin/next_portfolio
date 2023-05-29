import Link from "next/link";
import React from "react";
import { GrResume } from "react-icons/gr";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest ">
             Front-End | Back-End | MERN Stack Developer!
          </p>
          <h1 className="py-4 ">
            Hi, I am <span className="text-[#034001]"> Aaron Anglin</span>
          </h1>
          <h1 className="flex justify-center py-2">
            I am a Web Developer
          </h1>
          <p className="py-4  max-w-[70%] m-auto">
            Front-end web developer focused on building responsive
            web applications to meet the needs of the client. I have a passion
            to help others and love to see others achieve their goals.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/aaronanglin/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://github.com/aanglin"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://docs.google.com/document/d/107Ban2oqtI1Urxi2gj5HGq8zhk8SanMS/edit?usp=sharing&ouid=117709044425005473935&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
              >
                <GrResume />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
