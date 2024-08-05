import React from 'react'

const Testimonial = () => {
  return (
    <div className='testimonial-container-wrapper py-5'>
    <div className='testimonial-container-top'>
        <h2 className='primary-heading text-black testimonial-heading'>
        Voices Of Impact: <span className='color-heading'>Transformative Testimonials </span>from Our <span className='color-heading'>Community!</span>
        </h2>
    </div>
    <div className='container testimonial-container-bottom'>
       <div className='testimonial-container  my-5 d-flex justify-content-center align-items-center'>
            <div className='testimonial-box'>
                <p>
                    An extraordinary session. Simple, implementable, thought-provoking ideas. Thank you ENARK for organising it. Looking forward to many more. Hopefully on weekends so that many more teachers can attend.
                </p>
                <div className='testimonial' >
                    
                    <strong className='color-heading'>Reshma Zamindar</strong><br />
                    
                    <span>Tiger Cubs Preschool</span>
                </div>     
            </div>
            <div className='testimonial-box'>
                <p>
                  As the tag word, it was an Upliftment. Great Teamwork. Good Session to go with. Special thanks to the Enark Team!.
                </p>
                <div className='testimonial' >
                    <strong className='color-heading'>Snehal</strong><br />
                    <span>MINI MIRACLE KIDS PRESCHOOL</span>
                </div>     
            </div>
            <div className='testimonial-box'>
                <p>
                Very Engaging Session!
                Learn to bring fun and play to your little toddler learning years. The session was wonderful.                </p>
                <div className='testimonial' >
                    <strong className='color-heading'>Sahya</strong><br />
                    <span>AKANKSHA FOUNDATION</span>
                </div>     
            </div>
        </div>   
        <div className='register-btn'>
             <a href='#' className='text-decoration-none'>Reserve your Seat for <s>  INR 2999/-</s>   INR 299/- only</a>
       </div>
       <p className='primary-text'>Reserve your seat before 1st August, 2024 to unlock</p>

     </div> 
    </div>
  )
}

export default Testimonial
