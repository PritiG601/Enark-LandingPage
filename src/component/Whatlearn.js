import React from 'react'
//  import shape1 from "../assets/feature-shape-1.png"
//  import shape2 from "../assets/feature-shape-2.png"
import checkmark from "../assets/checkmark2.png"


function Whatlearn() {
    const webinaritem=[
        {
          title:"Structured Event Planning:",
          text:"Techniques for efficient and organized event planning."
        },
        {
          title:"Planning Formats: ",
          text:"Access to templates and formats for streamlined event organisation."
        },
        {
          title:"Staff Coordination:",
          text:"Strategies to ensure clarity and effective collaboration among staff."
        },
        {
          title:"Reputation Building:",
          text:"Methods to enhance your preschool's reputation through successful events."
        }
      ];
  return (
    <div className='what-container-wrapper py-5'>
       <div className='what-container-top'>
       <div className='primary-subheading'>
            <h2 className='primary-heading text-black'>
            What will you <span className='color-heading'>Learn?  </span>
           </h2>
           <p className='webinar-text text-black'>
           This webinar will provide you with the essential skills and tools to master the art of planning preschool events.
By integrating proven strategies and practical resources, you will be able to create seamless and memorable events that benefit children, parents, and staff alike. Here's what you will learn.           </p>
        </div> 
       
       </div>
       <div className='container what-container-bottom'>
        <div className='what-content'>
          {
                webinaritem.map((data)=>
                (
                    <div className='what-item' key={data}>
                        <div className='check-icon'>
                          <img src={checkmark}></img>
                        </div>
                      <strong>{data.title}</strong>
                      <span>{data.text}</span>                    
                    </div>
                  )
                )
          }
        </div>
       </div>
    </div>
  )
}

export default Whatlearn
