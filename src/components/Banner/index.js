import React from "react";
import { skills } from "../../utils/helper";
import projects from "../../assets/whiteProject.svg";
import about from "../../assets/whiteAbout.svg";

const Banner = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-primary font-jetBrains font-extrabold text-5xl mt-12">
        HALLO, ICH BIN <span className="text-white">DHRUV MAURYA</span>
      </div>

      <div className="flex justify-center gap-2 flex-wrap max-w-[60%] mt-8">
        {skills.map((item) => (
          <div
            key={item}
            className="border border-primary text-center py-0.5 px-2 text-primary"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-12 mt-8">
        <div className="flex items-center gap-3.5">
          <div className="w-6">
            <img src={projects} alt="projects" />
          </div>
          <div>SEE MY PROJECTS</div>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-6">
            <img src={projects} alt="about" />
          </div>
          <div>MORE ABOUT ME</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
