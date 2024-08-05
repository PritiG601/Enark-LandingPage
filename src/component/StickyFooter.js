import React from 'react'
import { useState, useEffect } from 'react';


const StickyFooter = () => {

    
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()
  })
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }


  return (
    <div className='sticky-footer'>
              <div className='container d-flex justify-content-between align-items-center'>
                <div className='sticky-footer-left '>
                  <span className='footer-offer-text'>Offer Will Expire in </span>
                  <span className='clock'>
                        <span>{convertToTwoDigit(time.hours)}h: </span>
                        <span>{convertToTwoDigit(time.minutes)}m: </span>
                        <span>{convertToTwoDigit(time.seconds)}s </span>
                  </span>
                  <h3 className='footer-register-text'>Register Today <strong className='color-heading'>At INR 2999/- INR 299</strong></h3>
                </div>
                <div className='register-btn footer-btn'>
                  <a href='#' className='text-decoration-none'><strong className='footer-btn-text'>Register Now </strong><br />At Just INR 299/-</a>
                </div>
              </div>
              
      </div>
  )
}

export default StickyFooter
