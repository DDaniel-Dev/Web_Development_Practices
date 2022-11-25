import React from "react";

export default function Projects() {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-google"></i>
                </div>
                <h3 className="card-title mb-3">Project 1</h3>
                <p className="card-text">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <a className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-secondary text-white">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-youtube"></i>
                </div>
                <h3 className="card-title mb-3">Project 2</h3>
                <p className="card-text">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <a className="btn btn-dark">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-apple"></i>
                </div>
                <h3 className="card-title mb-3">Project 3</h3>
                <p className="card-text">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <a className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};