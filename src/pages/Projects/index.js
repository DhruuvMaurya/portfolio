import React from "react";

export default function Projects({ data }) {
  return (
    <div>
      Projects Page
      <h2>
        <span className="page-title">{data.menu2}</span>
      </h2>
      <div className="about-me">{data.aboutMe}</div>
    </div>
  );
}
