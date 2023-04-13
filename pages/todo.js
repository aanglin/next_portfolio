import Image from "next/image";
import React from "react";
import ToDo from "../public/assets/todo.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Foodies2 = () => {
  return (
    <div className="w-full">
      <div className="relative w-screen h-[30vh] lg:h-[40vh]">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1 object-cover"
          layout="fill"
          src={ToDo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">TODO</h2>
          <h3>Next JS / Tailwind / Workbox-Webpack-Plugin</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          I have built a simple todo app that will allow you to keep track of your daily task and mark them complete when finished. If you need to update your task you can do so. You can also delete your task when done. It is saved to the database under users id. This app is also made into an PWA using workbox-webpack-plugin. So feel free to download it to the computer or phone.

 
          </p>
          <a
            href="todo-drab-seven-41.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/aanglin/todo"
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
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-1" />
                Workbox-Webpack-Plugin
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
