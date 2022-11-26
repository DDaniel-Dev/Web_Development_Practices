import React from "react";
import "./util.css";
import Map from "./Map";


export default function Contact() {
  return (
    <>
      <section id="contact" className="p-5 bg-primary text-light">
        <div className="container">
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-md">
              <h3 className="text-center mb-4">Contact</h3>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item bg-primary text-light">
                  <span className="fw-bold">Name:</span> Daniel D
                </li>
                <li className="list-group-item bg-primary text-light">
                  <span className="fw-bold">Location:</span> Austin, TX
                </li>
                <li className="list-group-item bg-primary text-light">
                  <span className="fw-bold">Phone:</span> (512) xxx-xxxx
                </li>
                <li className="list-group-item bg-primary text-light">
                  <span className="fw-bold">Email:</span> abc@gmail.com
                </li>
              </ul>
            </div>
            {/* Map */}
            <Map/>
          </div>
        </div>
      </section>
    </>
  )
};