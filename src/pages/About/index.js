import React from "react";

export default function About({ data }) {
  return (
    <div>
      <h2>
        <span className="page-title">{data.menu2}</span>
      </h2>
      <div className="about-me">{data.aboutMe}</div>
    </div>
  );
}
