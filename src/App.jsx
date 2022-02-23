import { useState } from 'react'
import Img1 from './images/photo-1.jpg'
import Img2 from './images/photo-2.jpg'
import Img3 from './images/photo-3.jpg'
import Img4 from './images/photo-4.jpg'
import Img5 from './images/photo-5.jpg'
import Img6 from './images/photo-6.jpg'
import Img7 from './images/photo-7.jpg'
import Img8 from './images/photo-8.jpg'
import Img9 from './images/photo-9.jpg'
import './App.css'

function App() {

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9]

  return (
    <div className="App">
      <div className="image-container">
        {
          images.map((image) => 
          <div className='image'>
            <img src={image} alt="" />
          </div> 
          )
        }
      </div>
    </div>
  )
}

export default App
