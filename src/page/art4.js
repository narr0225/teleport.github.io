import React from 'react'
import gat1 from '../image/art4/artAll4.png'
// import gat2 from '../image/art4/gat2.jpg'
// import gat3 from '../image/art4/gat3.jpg'
// import gat4 from '../image/art4/gat4.jpg'
// import gat5 from '../image/art4/gat5.jpg'


function Art4() {
  return (
    <div className='art4'>
      <div className='wrpA4'>
        <div className='wrp4'>
              <h1>INSPIRATION</h1>
              <div className='wrpP4'>
                  <img  src={gat1} alt="gat1"/>
                  {/* <img id='gat2' src={gat2} alt="gat2"/>
                  <img id='gat3' src={gat3} alt="gat3"/>
                  <img id='gat5' src={gat5} alt="gat5"/>
                  <img id='gat4' src={gat4} alt="gat4"/> */}
              </div>
          </div>
          <div className='wrpT4'>
              <h1>Songkla gate</h1>
              <p>A project inspired from the Doraemon Japanese cartoon who has magical things in his bag, The Doraemon door, One of his magic things, can take users to wherever they want. Therefore bringing this idea to the AR technology that will take users to another world to fulfill imagination. Most AR applications have only one 3D model standalone but for our project, it will create a 3D environment for users to interact with. The users can walk and observe the 3D exhibited view that will make people interested in archeology knowledge, therefore gaining knowledge to understand the history of the ancestors and also promote tourism in Songkhla province as well.Theme Design, green and blue that represent peace and calmness that relate to my 3D scene which has natural environments consisting of a river, waterfall, forest, rice field and sky. When users use my application, they will find it user friendly and easy to access. Songkla gate is an icon of application which represents the door beyond southern Thailand in ancient times.</p>
          </div>
      </div>
    </div>
  )
}

export default Art4