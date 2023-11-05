import React from "react";
import { NavLink } from "react-router-dom";
import SwitchLang from "../SwitchLang";
import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import about from "../../assets/about.svg";
import projects from "../../assets/projects.svg";

export default function Header({ data, i18n }) {
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
      <div className="w-14 h-20 self-start">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="bg-headerBg w-12 h-36 p-1.5 pb-4 items-center rounded-full flex flex-col justify-between">
        <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full">
          <div className="w-5 h-5">
            <img src={home} alt="logo" className="w-full h-full" />
          </div>
        </div>
        <div>
          <div className="w-5 h-5">
            <img src={about} alt="logo" className="w-full h-full" />
          </div>
        </div>
        <div>
          <div className="w-5 h-5">
            <img src={projects} alt="logo" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
