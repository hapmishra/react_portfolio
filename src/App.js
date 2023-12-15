import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/page" element={<SideBar />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="resume" element={<Resume />} />
            <Route path="work" element={<Work />} />
            <Route path="Services" element={<Services />} /> */}
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Navigate to="page/home" replace />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
