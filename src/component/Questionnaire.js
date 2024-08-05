import React from 'react'
import stepsshape from "../assets/steps-shape.png"

const Questionnaire = () => {
    const webinaritem=[
        {
          text:"Do you find event planning and organisation challenging?"
        },
        {
          text:"Are you looking for effective tools and formats to streamline event management?"
        },
        {
         text:"Do you want to improve staff coordination and communication during events?"
        },
        {
          text:"Are you interested in enhancing your preschool's reputation through successful events?"
        },
        {
            text:"Would you like to learn from experienced professionals in preschool event management?"
        },
        {
            text:"Are you seeking practical strategies to create memorable and impactful preschool events?"
        }
      ];
  return (
    <div className='questionnaire-container-wrapper p-5'>
    <div className='webinar-container-top'>
    <div className='question-head-content'>
       <h2 className='primary-heading question-heading'>
         A quick questionnaire for a teacher that looks forward to making children fall in love with learning again
        </h2>
        <strong className='primary-text color-heading'>
        (Spare a minute for a brighter future, please)
        </strong>
        <p>&nbsp;</p>
     </div> 
     <div className='web-back-img'>
       <img src={stepsshape}></img>
     </div>

    </div>
    <div className='container webinar-container-bottom'>
       <div className='webinar-content'>
       {
             webinaritem.map((data,index)=>
             (
                 <div className='question-item' key={data}>
                     <div className='d-flex justify-content-center align-items-center'>
                         <div className='item-question'><input type='checkbox' /> </div>
                         <div className='ms-4'><strong>{data.text}</strong></div>
                         
                     </div>
                   
                     <p></p>
                   
                 
                 </div>
               )
             )
           }
       </div>
        <div className='questionnaire-botton-content'>
        <h3 className='questionnaire-subheading fs-5 mt-5'>
             P.S. Spread the word to your fellow educators. Let's work together to build a thriving school community for all       
       </h3>
        <p className=''>
             If you have checked any of the boxes above, then we invite you to join our webinar
        </p>
       <div className='register-btn'>
             <a href='#' className='text-decoration-none'>Reserve your Seat for <s>  INR 2999/-</s>   INR 299/- only</a>
       </div>
       <p className='primary-text'>Reserve your seat before 1st August, 2024 to unlock</p>
 
        </div> 
       
     </div> 
 </div>
  )
}

export default Questionnaire
