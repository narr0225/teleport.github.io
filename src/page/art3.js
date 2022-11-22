import React from 'react'

import art3All from '../image/art3/Allele.png'

function Art3() {
  return (
    <div className='art3'>
      <div className='wrp3'>
          <div className='wrpT3'>
            <h1>APPLICATION <br></br>WAS INSTALLED </h1>
            <p>in institute for Southern Thai Studies Thaksin University</p>
          </div>
      </div>
      <div className='wrp3P'>
          <img className='art3All' src={art3All} alt="art3All"/>
      </div>
    </div>
  )
}

export default Art3