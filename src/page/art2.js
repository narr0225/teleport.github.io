import React from 'react'
// import video1 from '../image/art2/SOng6.jpg'
import video2 from '../video/art2V_2.mp4'
import poster1 from '../video/poster/posYoutube1.jpg'


function Art2() {
  return (
    <div className='art2'>
      <div className='wrp2'>
          <h1>AR and XR project</h1>
          {/* <img src={video1} alt="video1"/> */}
            <video src={video2} poster={poster1} controls/>
          <p className='tproject'>TELEPORT project is AR and MR mobile application.This Information Presentation will support tourists, students,
          people who are interested. Therefore, they will obtain new experiences and differences which will attract
          interest in the museum.It is going to have various 3D models and environments in each room  that contain  
          knowledge about history to present information to the audie
          </p>
      </div>
    </div>
  )
}

export default Art2