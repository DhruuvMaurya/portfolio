import React from "react";
import download from "../../assets/download.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";

const Footer = () => {
  return (
    <div>
      <div className="border-b font-jetBrains text-2xl font-extrabold">
        CONTACT
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex flex-col gap-3.5">
          <div className="flex gap-3.5 items-center">
            <div className="w-5">
              <img src={mail} alt="mail" />
            </div>
            <div>dhruv958maurya@gmail.com</div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-5">
              <img src={phone} alt="phone" />
            </div>
            <div>+91 97117 67528</div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5">
              <img src={download} alt="download" />
            </div>
            <div className="font-jetBrains text-xl font-medium">resume</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full">
              <div className="w-5 h-5">
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
            <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full">
              <div className="w-5 h-5">
                <img src={github} alt="github" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
