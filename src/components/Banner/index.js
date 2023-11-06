import React, { useEffect, useState } from "react";
import { skills } from "../../utils/helper";
import projects from "../../assets/whiteProject.svg";
import about from "../../assets/whiteAbout.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["DHRUV MAURYA"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-primary font-jetBrains font-extrabold text-5xl mt-12">
        {`HELLO, I AM`}{" "}
        <span className="text-white border-r-2 border-primary">{text}</span>
      </div>

      <div className="max-w-[70%] text-primary font-jetBrains font-extrabold text-2xl mt-3">
        {`I’m not just a`}
        <span className="text-white ml-4">{`Front-End Developer,`}</span>{" "}
        {`I’m your`}
        <span className="text-white ml-4">digital architect,</span>{" "}
        {`who brings
        innovation and finesse to the online world, with my expertise in`}
        :
      </div>

      <div className="flex justify-center gap-2 flex-wrap max-w-[60%] mt-10">
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
          <div>{`SEE MY PROJECTS`}</div>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-6">
            <img src={about} alt="about" />
          </div>
          <div>{`MORE ABOUT ME`}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
