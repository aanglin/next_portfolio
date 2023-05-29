import Image from "next/image";
import React from "react";
import TechCation from "../public/assets/techcation.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Foodies2 = () => {
  return (
    <div className="w-full">
      <div className="relative w-screen h-[30vh] lg:h-[40vh]">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1 object-cover"
          layout="fill"
          src={TechCation}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">TechCation</h2>
          <h3>Next JS / Tailwind </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#A62345]">Project</p>
          <h2>Overview</h2>
          <p>
          This was a get back to basics approach to making a landing page. I started with researching different sites to model the landing page. I found (Clint)code commerce channel on youtube and decided to base it on that style. I then created a prototype for the landing page using figma. I then coded the landing page. I made some changes to the landing page from the prototype and it looks more appealing. I have a better understanding of Next.js and Tailwind and look forward to learn more about these technologies. 
          </p>
          <a
            href="https://techcation.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/aanglin/techcation"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 text-gray-600 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                Next JS
              </p>
              <p className=" py-2 text-gray-600 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Foodies2;
