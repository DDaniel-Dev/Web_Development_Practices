import React from "react";
import Navbar from "./includes/Navbar";
import Showcase from "./includes/Showcase";
import Newsletter from "./includes/Newsletter";
import Projects from "./includes/Projects";
import Purpose from "./includes/Purpose";
import CommonFAQ from "./includes/CommonFAQ";


export default function Home() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Newsletter />
      <Projects />
      <Purpose />
      <CommonFAQ />
    </>
  )
};