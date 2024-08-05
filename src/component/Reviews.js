import React from 'react'
import ReactPlayer from 'react-player'


const Reviews = () => {
  return (
    <div className='review-container-wrapper py-5'>
    <div className='review-container-top'>
    <div className='primary-subheading  '>
         <h2 className='primary-heading text-black mb-5'>
         <span className='color-heading'>Real Reviews </span>from the <span className='color-heading'><br />Frontlines</span>!
        </h2>
     </div> 
    </div>
    <div className='review-container-bottom d-flex justify-content-center align-items-center'>
        <div className='review-box m-2'>
        <ReactPlayer url='https://www.youtube.com/watch?v=zgZhXj_dDKA' width="300px" height="350px" />
        </div>
        <div className='review-box m-2'>
        <ReactPlayer url='https://www.youtube.com/shorts/DV19_uCcHjs' width="300px" height="350px"/>
        </div>
        <div className='review-box m-2'>
            <ReactPlayer url='https://www.youtube.com/watch?v=7cZX23ziQeM' width="300px" height="350px" />
        </div>
    </div>
   
 </div>
  )
}

export default Reviews
