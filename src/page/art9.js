import React from 'react'
import ex1 from '../image/art9/IMG_9536.JPG'
import ex2 from '../image/art9/IMG_9540.JPG'
import ex3 from '../image/art9/IMG_9547.JPG'
import ex4 from '../image/art9/IMG_9605.JPG'

function Art9() {
  return (
    <div className='wrp9'>
      <div className='wrpAll9'>
       <h1>Exhibition</h1>
        <div className='wrpAE9'>
             <div className='wrpt9'>
                <div className='svg9'></div>
                <p>The “PSU 5G Showcase” event is an opportunity for communities, students, students and the general public Come to experience 5G technology and exchange ideas and build cooperation</p>
            </div>
            <div className='wrpP9'>
                <img id='ex1' src={ex1} alt="ex1"/>
                <img id='ex2' src={ex2} alt="ex2"/>
                <img id='ex3' src={ex3} alt="ex3"/>
                <img id='ex4' src={ex4} alt="ex4"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Art9