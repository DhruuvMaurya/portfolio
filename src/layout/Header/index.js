import React from "react";
import { NavLink } from "react-router-dom";
import SwitchLang from "../SwitchLang";

export default function Header({ data, i18n }) {
  const menuItems = [
    {
      title: data.menu1,
      uri: "/",
    },
    {
      title: data.menu2,
      uri: "/about",
    },
  ];

  return (
    <header>
      <div className="navbar">
        <div className="logo">Logo</div>
        <SwitchLang i18n={i18n} />
        <div>
          {menuItems.map((item) => (
            <NavLink key={item.uri} to={item.uri}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
