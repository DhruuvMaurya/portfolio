import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import disabledHome from "../../assets/disabledHome.svg";
import disabledAbout from "../../assets/disabledAbout.svg";
import disabledProject from "../../assets/disabledProject.svg";
import project from "../../assets/project.svg";
import about from "../../assets/about.svg";
import { Link } from "react-router-dom";

export default function Header({ data, i18n }) {
  const [activeImage, setActiveImage] = useState("");
  // const menuItems = [
  //   {
  //     title: data.menu1,
  //     uri: "/",
  //   },
  //   {
  //     title: data.menu2,
  //     uri: "/about",
  //   },
  // ];

  return (
    // <header>
    //   <div className="navbar">
    //     <div className="logo">Logo</div>
    //     <SwitchLang i18n={i18n} />
    //     <div>
    //       {menuItems.map((item) => (
    //         <NavLink key={item.uri} to={item.uri}>
    //           {item.title}
    //         </NavLink>
    //       ))}
    //     </div>
    //   </div>
    // </header>

    <div className="flex items-center justify-between">
      <Link to="/">
        <div className="w-14 h-20 self-start">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
      </Link>

      <div className="bg-headerBg w-12 h-36 p-1.5 items-center rounded-full flex flex-col justify-between">
        <Link to="/">
          <div
            className="w-10 h-10 flex items-center justify-center hover:rounded-full hover:bg-secondary hover:hover-image hover:cursor-pointer"
            onMouseEnter={() => setActiveImage("homeActive")}
            onMouseLeave={() => setActiveImage("")}
          >
            <div className="w-5 h-5">
              <img
                src={activeImage === "homeActive" ? home : disabledHome}
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>
        </Link>
        <Link to="about">
          <div
            className="w-10 h-10 flex items-center justify-center hover:rounded-full hover:bg-secondary hover:hover-image hover:cursor-pointer"
            onMouseEnter={() => setActiveImage("aboutActive")}
            onMouseLeave={() => setActiveImage("")}
          >
            <div className="w-5 h-5">
              <img
                src={activeImage === "aboutActive" ? about : disabledAbout}
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>
        </Link>
        <Link to="projects">
          <div
            className="w-10 h-10 flex items-center justify-center hover:rounded-full hover:bg-secondary hover:hover-image hover:cursor-pointer"
            onMouseEnter={() => setActiveImage("projectActive")}
            onMouseLeave={() => setActiveImage("")}
          >
            <div className="w-5 h-5">
              <img
                src={
                  activeImage === "projectActive" ? project : disabledProject
                }
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
