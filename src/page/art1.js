import React from 'react'
import { Parallax,Background } from 'react-parallax';
import image1 from '../image/art1/bg1.jpg'
// import star from '../image/art1/bg1.jpg'
// import rock from '../image/art1/rock.png'

// const image2 ="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

function Art1() {
  return (
    <>
    <div className='art1'>
      {/* <Parallax  bgImage={image1} style={{ height: 2100 }} strength={800}>
          <div className='react-parallax-bgimage' ></div>
      </Parallax> */}
      <Parallax style={{ height: 937 }} strength={500}>
        <Background className="custom-bg">
            <img src={image1} alt="fill murray" />
        </Background>
        <p>TELEPORT</p>
      </Parallax>
      <div className='rock' ></div>
    </div>

    </>
  )
}

export default Art1