import React from "react";
import projects from "../../assets/project.svg";
import reve from "../../assets/reve.png";
import lifeguru from "../../assets/lifeguru.png";

export default function Projects({ data }) {
  return (
    <>
      <div className="flex items-center gap-3.5 mt-8">
        <div className="w-10 h-10 hover:bg-secondary flex items-center justify-center rounded-full">
          <div className="w-12">
            <img src={projects} alt="projects" />
          </div>
        </div>
        <div className="text-primary font-jetBrains font-bold text-4xl">{`PROJECTS`}</div>
      </div>
      <div className="flex flex-wrap justify-between gap-8 mt-10">
        <div className="w-[48%] rounded-[7px] overflow-hidden">
          <img src={reve} alt="reve" />
        </div>
        <div className="w-[48%] rounded-[7px] overflow-hidden">
          <img src={lifeguru} alt="reve" />
        </div>
        <div className="w-[48%] rounded-[7px] overflow-hidden">
          <img src={reve} alt="reve" />
        </div>
        <div className="w-[48%] rounded-[7px] overflow-hidden">
          <img src={reve} alt="reve" />
        </div>
        <div className="w-[48%] rounded-[7px] overflow-hidden">
          <img src={reve} alt="reve" />
        </div>
        <div className="w-[48%] rounded-[7px] overflow-hidden">
          <img src={reve} alt="reve" />
        </div>
      </div>
    </>
  );
}
