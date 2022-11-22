import React from 'react'
import vrg from '../image/art6/vrg.png'
import vide1 from '../video/art6V.mp4'

function Art6() {
  return (
    <div  className='art6'>
        <div className='wpT6'>
          <h1>MR</h1>
          <h2>MIX REALITY</h2>
          {/* <img id='vrg' src={vrg} alt="vrg"/> */}
          <video src={vide1} controls />
          <p>In the virtual world (MR Mode), there is a description tag that informs the relevant information in each room in which the user has to wear the VR glasses. The user can change the language by adjusting the camera angle to the center of the white color to change the national flag button and there will be a timer wheel to confirm to change the language.</p>
        </div>
    </div>
  )
}

export default Art6