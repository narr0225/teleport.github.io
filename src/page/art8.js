import React from 'react'
import crowd1 from '../image/art8/image26.jpg'
import crowd2 from '../image/art8/image27.jpg'
import crowd3 from '../image/art8/image33.jpg'


function Art8() {
  return (
    <div>
      <div className='wrT8'>
        <h1 id='spf8'>Demonstrate</h1>
        <h1>TEST</h1>
        <div className='grid8'>
          <p>Planned to test the TELEPORT project to demonstrate to users for evaluation by contacting a reception of The Institute for Southern Thai Studies Thaksin University to schedule a group of visitors. They are local administrators for support and development by Thaksin University. Most of them are interested in the TELEPORT project.</p>
        </div>
      </div>
      <div className='wrP8'>
        <img id='crowd1' src={crowd1} alt="crowd1"/>
        <img id='crowd2' src={crowd2} alt="crowd2"/>
        <img id='crowd3' src={crowd3} alt="crowd3"/>
      </div>
    </div>
  )
}

export default Art8