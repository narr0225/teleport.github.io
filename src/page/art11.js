import React from 'react'
import logo1 from '../image/art11/logo1.png'
import logo2 from '../image/art11/log4.png'
import logo3 from '../image/art11/logo2.png'
import logo4 from '../image/art11/logo3.png'
import logo5 from '../image/art11/logo6.png'
import logo6 from '../image/art11/logo7.png'
import logo7 from '../image/art11/logo8.png'

function Art11() {
  return (
    <div className='wrp11'>
        <p>development by</p>
        <div className='wplogo11'>
            <div className='wrpSup11'>
              <img id='logo1' src={logo1} alt="logo1"/>
              <img id='logo2' src={logo2} alt="logo2"/>
              <img id='logo3' src={logo3} alt="logo3"/>
              <img id='logo4' src={logo4} alt="logo4"/>
              <img id='logo5' src={logo5} alt="logo5"/>
              <img id='logo6' src={logo6} alt="logo6"/>
              <img id='logo7' src={logo7} alt="logo7"/>
            </div>
        </div>
    </div>
  )
}

export default Art11