import React from "react";

export default function Home({ data }) {
  return (
    <div>
      <h2>
        <span className="page-title">{data.menu1}</span>
      </h2>
      <div className="paragraph">{data.paragraph}</div>
      <div>home</div>
    </div>
  );
}
