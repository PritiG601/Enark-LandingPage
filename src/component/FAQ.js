import React from 'react'
import accordian from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css'
const FAQ = () => {
  return (
    <div className='faqs-container-wrapper py-5'>
    <div className='faqs-container-top'>
    <div className='primary-subheading my-5 '>
         <h2 className='primary-heading text-black'>
         Frequently Asked Questions
        </h2>
     </div> 
     
    </div>
    <div className='container faq-container-bottom '>
        <div class="accordion accordion-flush mx-5" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                   <strong>Is this webinar suitable for new preschool teachers?</strong> 
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Yes, it is ideal for both new and experienced preschool educators seeking to improve their event-planning skills.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <strong>How long is the webinar?</strong>
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">from 4:00pm to 5:30pm</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <strong> What is the registration fee for the webinar?</strong>
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">The registration fee for the webinar is <s>INR 2999/-</s> INR 299.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <strong>Will I receive a certificate of completion?</strong>
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Yes, all participants will receive a certificate upon completing the Webinar.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  <strong> Can I ask questions during the webinar?</strong>
                  </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Absolutely! There will be a dedicated Questions & Answer session.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  <strong>How do I register for the webinar?</strong>
                  </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">A Simply click the registration link provided on this page and fill out the required information to secure your spot.</div>
                </div>
              </div>
        </div>  
        <div className='register-btn'>
             <a href='#' className='text-decoration-none'>Reserve your Seat for <s>  INR 2999/-</s>   INR 299/- only</a>
       </div>
       <p className='primary-text'>Reserve your seat before 1st August, 2024 to unlock</p>
        <p className='primary-btn-text'>Don't miss this opportunity to learn from the best and take your early childhood education skills to the next level. Register now and secure your spot!</p>
     </div> 
 </div>
  )
}

export default FAQ
