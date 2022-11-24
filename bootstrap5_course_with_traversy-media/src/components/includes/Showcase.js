import React from "react";
import DeveloperIcon from "../img/showcase.svg";

export default function Showcase() {
  return (
    <section className="bg-dark text-light p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-item-center justify-content-between">
          <div>
            <h1>Daniel, the <span className="text-info">Software Developer</span></h1>
            <p className="lead my-4">
              This is a web development using technology of HTML, CSS, JavaScript, ReactJS & Bootstrap 5
            </p>
            <button className="btn btn-warning">My Journey</button>
          </div>
          <img className="img-fluid w-50 d-none d-sm-block" src={DeveloperIcon} alt="Developer image"/>
        </div>
      </div>
    </section>
  )
};