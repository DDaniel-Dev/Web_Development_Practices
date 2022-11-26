import React from "react";
import SifuCapy from "../img/sifu_capy.jfif";

export default function CommonFAQ() {
  return (
    <>
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">
            Frequently Asked Questions
          </h2>
          <div class="accordion accordion-flush" id="questions">
            {/* Item 1 */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button 
                  class="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#question-first"
                >
                  How did I become a software developer?
                </button>
              </h2>
              <div 
                id="question-first" 
                class="accordion-collapse collapse" 
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  I started my self-taught journey around March, 2022. 
                  And now I am ready to take on new challenges.
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button 
                  class="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#question-second"
                >
                  What was your previous employment?
                </button>
              </h2>
              <div 
                id="question-second" 
                class="accordion-collapse collapse" 
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  I was a small business owner at 5 Star Forever Nails in Austin, TX.
                  We have been serving our local for over 4 years.
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button 
                  class="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#question-third"
                >
                  Where do I currently located?
                </button>
              </h2>
              <div 
                id="question-third" 
                class="accordion-collapse collapse" 
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  I am currently located in Austin, Texas
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button 
                  class="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#question-fourth"
                >
                  What's my animal spirit?
                </button>
              </h2>
              <div 
                id="question-fourth" 
                class="accordion-collapse collapse" 
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  <h2>Capybara</h2>
                  <hr/>
                  <img className="img-fluid rounded-circle" src={SifuCapy}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};