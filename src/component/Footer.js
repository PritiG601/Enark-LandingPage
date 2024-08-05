import React from 'react'
import upliftlogo from '../assets/UpliftLogo.png'

const Footer = () => {
  
  return (
    <div className='footer-wrapper'>
      <div className='Footer-container text-center p-5'>
        <div className='footer-top py-5'>
            <div className='footer-logo mb-3 '>
            <img src={upliftlogo} alt="footerlogo" className='w-50 m-auto'></img>
            </div>
            <span className='footer-text'>For any support, please mail to hellouplift@enark.in. Our support team will get back to you within 24 hours.</span>

        </div>
        <div className='footer-bottom mt-3'>
              <span>© 2024 Enark Uplift | All Rights Reserved.</span> 
        </div>
      </div>
    </div>
  )
}

export default Footer
