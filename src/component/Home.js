import React from 'react'
import clock from '../assets/clockicon.png';
import calender from '../assets/calender.png';
import zoom from '../assets/zoom.png';
import speaker from '../assets/speaker.png';

function Home() {
  return (
    <div className='home-container'>
      <div className='container home-container-top'>
          <span>&nbsp;</span>
        <div className='heading mt-5'>
            <h1 className='primary-heading'>
            Are you also struggling while planning an event for your preschool?
           </h1>
        </div>  
        <h3 className='primary-subheading color-heading mt-4'>Master the Art of Organizing Successful Preschool Events with Ease.</h3>
                
      </div>
      <div className='container home-container-bottom d-flex my-5'>
        <div className='home-container-left'>
            <div className='home-box1 d-flex justify-content-center  align-items-center'>
                <div className='home-box d-flex justify-content-center  align-items-center'>
                    <div className='box-icon me-2'><img src={clock}></img></div>
                    <div className='box-text'>1.5 Hours Webinar</div>
                </div>
                <div className='home-box d-flex justify-content-center  align-items-center'>
                    <div className='box-icon me-2'><img src={zoom}></img></div>
                    <div className='box-text'>Online on ZOOM</div>
                </div>
            </div>
            <div className='home-box d-flex justify-content-center  align-items-center'>
                <div className='box-icon me-2'><img src={calender}></img></div>
                <div className='box-text'>
                    <strong>Friday, 2nd August, 2024</strong>
                    <p>04:00 pm to 05:30 pm IST</p>                    
                </div>
            </div>
            <div className='home-box home-box-speaker'>
                <div className='box-image'><img src={speaker}></img></div>
                <div className='box-text'>
                    <strong className='speaker-heading '>Ms. Azaleeya Huii</strong><br/>COO & Co-Founder, Enark Education</div>
            </div>
        </div>
        <div className='home-container-right m-auto'>
            <div className='box-image speaker-img-container'>
                 <img src={speaker} className="border-0"></img>
            </div>
            <p className='primary-text mt-3'>Reserve your seat before 1st August 2024 to unlock</p>
            <div className='register-btn home-register-btn'>
                <a href='#' className='text-decoration-none'>Register Now for <s>INR 2999/-</s> INR 299/-</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
