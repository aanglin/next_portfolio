import Image from "next/image";
import React from "react";
import Hulu from "../public/assets/projects/Hulu2.0.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Hulu2 = () => {
  return (
    <div className="w-full">
      <div className="relative w-screen h-[30vh] lg:h-[40vh]">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Hulu}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Hulu 2.0</h2>
          <h3>Next JS / Tailwind / TMDB API</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#A62345]">Project</p>
          <h2>Overview</h2>
          <p>
            Do you want to know what new movies are out. Do you you want to know
            how many likes they have. Look no further than Hulu 2.0. Now you can
            see the picture of the movie, the description, the date it came out
            and the likes. Now you can make a decision to watch it or not.
          </p>
          <a
            href="https://hulu-2-0-black.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/aanglin/hulu-2.0"
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
              <p className=" py-2 text-gray-600 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                TMDB API
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

export default Hulu2;
