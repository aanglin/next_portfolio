import React from "react";
import ProjectItems from "./ProjectItems";
import Weather from "../public/assets/projects/Weather.png";
import FactorFiction from "../public/assets/projects/FactorFiction.png";
import Notes from "../public/assets/projects/Notes.png";
import TechBlog from "../public/assets/projects/techBlog.png";
import Hulu from "../public/assets/projects/Hulu2.0.png";
import Foodies2 from "../public/assets/projects/Foodies2.0.png";
import TechCation from "../public/assets/techcation.png";
import Dealio from "../public/assets/dealio.png";
import ToDo from "../public/assets/todo.png";
import ETracker from "../public/assets/projects/e-tracker.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#A62345] font-extrabold ">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems title="Hulu 2.0" bgImage={Hulu} projectUrl="/hulu" />
          <ProjectItems
            title="Finance Tracker"
            bgImage={ETracker}
            projectUrl="/finance"
          />
          <ProjectItems
            title="Weather App"
            bgImage={Weather}
            projectUrl="/weather"
          />
          <ProjectItems
            title="Fact-or-Fiction App"
            bgImage={FactorFiction}
            projectUrl="/factorfiction"
          />
          <ProjectItems title="Notes App" bgImage={Notes} projectUrl="/notes" />
          <ProjectItems
            title="TechBlog App"
            bgImage={TechBlog}
            projectUrl="/techBlog"
          />
          <ProjectItems
            title="Foodies 2.0"
            bgImage={Foodies2}
            projectUrl="/foodies"
          />
          <ProjectItems
            title="TechCation"
            bgImage={TechCation}
            projectUrl="/techCation"
          />
          <ProjectItems title="Dealio" bgImage={Dealio} projectUrl="/dealio" />
          <ProjectItems title="ToDo" bgImage={ToDo} projectUrl="/todo" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
