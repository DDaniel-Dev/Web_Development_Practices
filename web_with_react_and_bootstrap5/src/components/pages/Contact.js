import React from "react";

export default function Contact() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h2 id="about-h4">Contact Us</h2>
            </div>
            <div className="col-md-8 my-auto">
              <h2 id="about-h6" className="float-end">
                Home / Contact Us
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h2 id="about-h5">Contact Form</h2>
                  <hr/>
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter First & Last Name"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number: (example: 123-456-xxxx)"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email Address</label>
                    <input type="text" className="form-control" placeholder="Enter Email: (example: abc@email.com)"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>
                    <textarea rows="3" cols="" className="form-control" placeholder="Share your Messages . . ."></textarea>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 id="about-h5" className="main-heading">Address Information</h2>
                  <div className="underline"></div>
                  <p>
                    #69, Austin, TX, United States
                  </p>
                  <p>
                    +1 (512) 999-1234
                  </p>
                  <p>
                    Email: abc@mail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};
