import React from 'react'
import phone from '../image/art5/phone.png'
import video2 from '../video/art5V_3.mp4'


function Art5() {
  return (
    <div className='art5'>
      <div className='Wrapping5'>
        <img id='phone2' src={phone} alt="phone"/>
        <video id='phone1'src={video2} controls/>
        <div className='wrpT5'>
              <h1 id='AR'>AR </h1>
              <h1>AUGMENTED REALITY</h1>
              <br></br>
              <p>Virtual guided systems for learning and traveling in museums (Case study: Folklore Museum, Southern Thai Studies Thaksin University) is a mobile application that combines virtual reality technology (Augmented Reality / AR). It is divided into functions. Surfing the virtual world or AR Portal / Visual The three-dimensional world that uses the least amount of structure (Low Polygon Modeling)</p>
          </div>
          {/* <img id='phone' src={phone} alt="phone"/> */}
          {/* <div id='phone2'>
            <video src={video2} controls/>
          </div> */}
      </div>
    </div>
  )
}

export default Art5