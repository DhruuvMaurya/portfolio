import React, { useEffect, useState } from "react";
import SwitchLang from "../../layout/SwitchLang";
import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import disabledHome from "../../assets/disabledHome.svg";
import disabledAbout from "../../assets/disabledAbout.svg";
import disabledProject from "../../assets/disabledProject.svg";
import project from "../../assets/project.svg";
import about from "../../assets/about.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header({ data, i18n }) {
  const [activeImage, setActiveImage] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveImage("homeActive");
    } else if (location.pathname === "/about") {
      setActiveImage("aboutActive");
    } else if (location.pathname === "/projects") {
      setActiveImage("projectActive");
    }
  }, [location.pathname, activeImage]);

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
        <Link
          to="/"
          className={`w-10 h-10 flex items-center justify-center ${
            activeImage === "homeActive"
              ? "rounded-full bg-secondary cursor-pointer hover:bg-hover-image"
              : ""
          }`}
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
        </Link>
        <Link to="about">
          <div
            className={`w-10 h-10 flex items-center justify-center ${
              activeImage === "aboutActive"
                ? "rounded-full bg-secondary cursor-pointer hover:bg-hover-image"
                : ""
            }`}
            onMouseEnter={() => {
              setActiveImage("aboutActive");
              console.log("about enter", activeImage);
            }}
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
            className={`w-10 h-10 flex items-center justify-center ${
              activeImage === "projectActive"
                ? "rounded-full bg-secondary cursor-pointer hover:bg-hover-image"
                : ""
            }`}
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
