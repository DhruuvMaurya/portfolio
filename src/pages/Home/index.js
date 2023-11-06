import React from "react";
import Video from "../../components/Video";
import Header from "../../layout/Header";
import Banner from "../../components/Banner";
import Footer from "../../layout/Footer";

export default function Home({ data }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Video />
      <div className="absolute text-white w-4/5 h-[90%] flex flex-col justify-between">
        <div>
          <Header />
          <Banner />
        </div>
        <Footer />
      </div>
    </div>
  );
}
