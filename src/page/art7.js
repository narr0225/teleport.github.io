import React from 'react'
// import vrg from '../image/art4/gat2.jpg'
import video1 from '../video/art7V.mp4'
import poster1 from '../video/poster/posYoutube4.jpg'
function Art7() {
  return (
    <div className='art7'>
        <div className='wrp7'>
          <h1>PhotoScan</h1>
          <p>In the virtual scene is measured by photogrammetry or photoscan to replace the 3D model scene in the program when the user walks along the scene. In the simulation, based on the actual environment for The principles of working on AR Portal / Visual World may be limited by space errors, causing the surrounding objects in the museum to be damaged by Users,</p>   
          {/* <img src={vrg} alt='kk'></img>      */}
          <video src={video1} poster={poster1} controls/>
        </div>
    </div>
  )
}

export default Art7