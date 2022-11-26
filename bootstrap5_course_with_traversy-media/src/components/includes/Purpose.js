import React from "react";
import FundamentalsImg from "../img/fundamentals.svg";
import CappyClappy from "../img/cappyclappy.jpg"

export default function Purpose() {
  return (
  <>  
    <section id="info" className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img className="img-fluid" src={FundamentalsImg} alt="HTML, CSS, JavaScript"/>
          </div>
          <div className="col-md p-5">
            <h2>Missions</h2>
            <p className="info">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <a href="..." className="btn btn-secondary mt-3">
              <i className="bi bi-info-circle"></i>  Read More
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="info" className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Vision</h2>
            <p className="info">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <a href="..." className="btn btn-secondary mt-3">
              <i className="bi bi-info-circle"></i>  Read More
            </a>
          </div>
          <div className="col-md">
            <img className="img-fluid" src={CappyClappy} alt="Capybara Bathing"/>
          </div>
        </div>
      </div>
    </section>
  </>
  )
};