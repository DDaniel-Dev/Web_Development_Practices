import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="section footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 id="home-h3">Company Information</h3>
            <hr/>
            <p className="text-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="col-md-4" >
            <h3 id="home-h3">Quick Links</h3>
            <hr/>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
            
          </div>
          <div className="col-md-4" >
            <h3 id="home-h3">Contact Information</h3>
            <hr/>
            <div className="text-light mb-1"><p className="text-light">#69, Austin, TX, United States</p></div>
            <div className="text-light mb-1"><p className="text-light">+1 (512) 123-4567</p></div>
            <div className="text-light mb-1"><p className="text-light">+1 (512) 890-1234</p></div>
            <div className="text-light mb-1"><p className="text-light">abc@office.com</p></div>
          </div>
        </div>
      </div>
    </section>
  )
};