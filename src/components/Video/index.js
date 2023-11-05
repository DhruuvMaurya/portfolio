import React from "react";
import sample from "../../assets/blue.mp4";

const Video = () => {
  return (
    <video autoPlay loop muted className="w-full h-full object-cover">
      <source src={sample} type="video/mp4" />
    </video>
  );
};

export default Video;
