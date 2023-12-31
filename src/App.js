import logo from "./logo.svg";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";

// Data
import data from "./data";
import Layout from "./layout";
import Projects from "./pages/Projects";

function App() {
  const { i18n } = useTranslation();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    if (i18n.language === "en") {
      setAllData(data.en);
    } else {
      setAllData(data.fr);
    }
  }, [i18n.language]);

  const selectedLanguage = localStorage.getItem("i18nextLng");

  // Update the lang attribute of the HTML element
  if (selectedLanguage) {
    document.documentElement.lang = selectedLanguage;
  }

  return (
    <Suspense fallback="loading">
      {/* <Header data={allData} i18n={i18n} /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home data={allData} />} />
          <Route path="/about" element={<About data={allData} />} />
          <Route path="/projects" element={<Projects data={allData} />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
