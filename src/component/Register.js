import React from 'react'

const Register = () => {
    const webinaritem=[
        {
          title:"Gain Expert Insights:",
          text:"Learn from professionals with extensive experience in preschool event management."
        },
        {
          title:"Access Practical Tools:",
          text:"Receive ready-to-use planning formats and templates for various events."
        },
        {
          title:"Improve Staff Coordination:",
          text:"Discover strategies to enhance communication and teamwork among your staff."
        },
        {
          title:"Boost Preschool Reputation:",
          text:"Organise events that leave a lasting positive impression on children, parents, and the community."
        }
      ];
  return (
    
    <div className='register-container-wrapper p-5'>
    <div className='webinar-container-top'>
    <div>
         <h2 className='primary-heading text-white'>
         Why <span className='color-heading'>Register? </span>
        </h2>
        <p className='webinar-text register-text'>
          Planning and managing preschool events can be challenging, but with the right strategies and tools, you can ensure success every time. This webinar will equip you with the knowledge and resources needed to create memorable and impactful events for children, parents, and staff. Here's why you should register
        </p>
     </div> 
    
     <span>&nbsp;</span>

    </div>
    <div className='container webinar-container-bottom'>
       <div className='webinar-content'>
       {
             webinaritem.map((data,index)=>
             (
                 <div className='webinar-item register-item' key={data}>
                     <div className='d-flex'>
                         <div className='item-count'><strong>{index+1}</strong></div>
                         <div className='primary-subheading register-title'><strong>{data.title}</strong></div>
                         
                     </div>
                   
                     <p>{data.text}</p>
                   
                 
                 </div>
               )
             )
           }
       </div>
           
       <h2 className='primary-subheading d-flex justify-content-center mt-5'>
             Register now for the Webinar
        </h2>
        <p className='register-text'>
             Click the button below to register and secure your spot for the webinar
        </p>
       <div className='register-btn'>
             <a href='#' className='text-decoration-none'>Reserve your Seat for <s>  INR 2999/-</s>   INR 299/- only</a>
       </div>
       <p className='primary-text'>Reserve your seat before 1st August, 2024 to unlock</p>

     </div> 
 </div>
  )
}

export default Register
