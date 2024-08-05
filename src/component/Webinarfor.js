import React from 'react'
import stepsshape from "../assets/steps-shape.png"

function Webinarfor()
 {
  const webinaritem=[
    {
      title:"Preschool Educators:",
      text:"Teachers dedicated to enhancing their event planning and management skills, seeking innovative approaches to create engaging and educational events that benefit children and their families."
    },
    {
      title:"Preschool Administrators:",
      text:"Individuals responsible for overseeing the logistics and execution of events, looking for strategies to ensure every event runs smoothly and effectively, from initial planning stages to successful completion."
    },
    {
      title:"Preschool Staff:",
      text:"Support staff who play a crucial role in organising and managing various preschool events, aiming to streamline their processes and contribute more effectively to the overall success of each event."
    },
    {
      title:"New Educators:",
      text:"Those new to the field and are eager to gain knowledge and understanding of event planning and looking to build a robust skill set to support their career growth and improve their ability to organize impactful events."
    }
  ];

  return (
    <div className='webinnar-container-wrapper py-5'>
       <div className='webinar-container-top'>
       <div className='primary-subheading'>
            <h2 className='primary-heading text-black'>
            Who is this <span className='color-heading'>Webinar </span>for?
           </h2>
           <p className='webinar-text text-black'>
           This webinar is perfect for <strong className='color-heading'>preschool educators, administrators, and staff who plan and manage events.  </strong>Whether you are new to event planning or looking to refine your skills, it will provide you with the essential tools and knowledge.
           </p>
        </div> 
        <div className='web-back-img'>
          <img src={stepsshape}></img>
        </div>
       </div>
       <div className='container webinar-container-bottom'>
          <div className='webinar-content'>
          {
                webinaritem.map((data)=>
                (
                    <div className='webinar-item' key={data}>
                      <h5><strong>{data.title}</strong></h5>
                      <ul>
                        <li key={data.id}>{data.text}</li>
                      </ul>
                    
                    </div>
                  )
                )
              }
          </div>
              
          <div className='register-btn webinar-register-btn'>
                <a href='#' className='text-decoration-none'>Reserve your spot now for <s> INR 2999/-</s>  INR 299/- and amplify your preschool's impact online!</a>
          </div>
          <p className='primary-text'>Reserve your seat before 1st August, 2024 to unlock</p>

        </div> 
    </div>
  )
}

export default Webinarfor
