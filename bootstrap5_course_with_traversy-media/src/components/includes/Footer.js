import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="p-3 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright &copy; 2022 by Daniel D</p>
          <a href="#" className="position-absolute bottom-0 end-0 p-3">
            <i className="bi bi-arrow-up-circle h1 text-secondary"></i>
          </a>
        </div>
      </footer>
    </>
  )
};