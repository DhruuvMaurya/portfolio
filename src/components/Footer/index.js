import React from "react";
import download from "../../assets/download.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import reflections from "../../assets/reflections.pdf";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="border-b font-jetBrains text-2xl font-extrabold">
        CONTACT
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex flex-col gap-3.5">
          <a href={`mailto:dhruv958maurya@gmail.com`}>
            <div className="flex gap-3.5 items-center">
              <div className="w-5">
                <img src={mail} alt="mail" />
              </div>
              <div>dhruv958maurya@gmail.com</div>
            </div>
          </a>

          <a href={`tel:+91 97117 67528`}>
            <div className="flex items-center gap-3.5">
              <div className="w-5">
                <img src={phone} alt="phone" />
              </div>
              <div>+91 97117 67528</div>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <a
              href={reflections}
              download="Dhruv's Resume"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-10 h-10 hover:bg-secondary flex items-center justify-center rounded-full">
                <div className="w-5 h-5">
                  <img src={download} alt="download" />
                </div>
              </div>
            </a>
            <div className="font-jetBrains text-xl font-medium">resume</div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={`https://www.linkedin.com/in/dhruv-maurya/`}
              target="_blank"
            >
              <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full">
                <div className="w-5 h-5">
                  <img src={linkedin} alt="linkedin" />
                </div>
              </div>
            </Link>
            <Link to={`https://github.com/DhruuvMaurya`} target="_blank">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full">
                <div className="w-5 h-5">
                  <img src={github} alt="github" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
