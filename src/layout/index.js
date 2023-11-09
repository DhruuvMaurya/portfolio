import React from "react";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Video />
      <div className="absolute text-white w-10/12 h-[90%] flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
