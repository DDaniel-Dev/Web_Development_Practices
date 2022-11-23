import React from "react";
import Slider from "../includes/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";
import Service1 from "../images/img1.jpg";
import Service2 from "../images/img2.png";
import Service3 from "../images/img3.png";

export default function Home() {
  return (
    <div>
      <Slider/>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 id="home-h2" className="main-heading">Our Company</h2>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <Link to="/about" className="btn btn-warning shadow"> Read More </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our vision, mission and values */}
      <VMC/>

      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h2 className="main-heading">Our Services</h2>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4" >
              <div className="card shadow">
                <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                <div className="card-body">
                  <h3 id="home-h3">Our Vision</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                  <Link to="/services" className="btn btn-white shadow">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4" >
              <div className="card shadow">
                <img src={Service2} className="w-100 border-bottom" alt="Services"/>
                <div className="card-body">
                  <h3 id="home-h3">Our Vision</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                  <Link to="/services" className="btn btn-white shadow">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4" >
              <div className="card shadow">
                <img src={Service3} className="w-100 border-bottom" alt="Services"/>
                <div className="card-body">
                  <h3 id="home-h3">Our Vision</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                  <Link to="/services" className="btn btn-white shadow">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};