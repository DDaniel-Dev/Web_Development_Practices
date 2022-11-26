import React from "react";
import Navbar from "./includes/Navbar";
import Showcase from "./includes/Showcase";
import Newsletter from "./includes/Newsletter";
import Projects from "./includes/Projects";
import Purpose from "./includes/Purpose";
import CommonFAQ from "./includes/CommonFAQ";
import Contact from "./includes/Contact";


export default function Home() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Newsletter />
      <Projects />
      <Purpose />
      <CommonFAQ />
      <Contact />
    </>
  )
};