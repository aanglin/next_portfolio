import Link from "next/link";
import React from "react";
import { GrResume } from "react-icons/gr";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
             Front-End | Back-End | MERN Stack Developer!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]"> Aaron Anglin</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            {" "}
            I am a Front-End Web Developer{" "}
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Front-end web developer focused on building responsive
            web applications to meet the needs of the client. I have a passion
            to help others and love to see others acheive their goals.
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
                href="https://docs.google.com/document/d/1N2_ht68l2LVZNMGlVJ1RfV9gx2YJrMUmtLAE7JDAswA/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <GrResume />
              </Link>
            </div>
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link 
              href='/#contact'
              >
              <BsFillPersonLinesFill />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
