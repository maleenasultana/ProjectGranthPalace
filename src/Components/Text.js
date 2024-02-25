import React from 'react'
import "../App.css";
import Marquee from "react-fast-marquee"
const Text = () => {
  return (
    <div className='text' >

<Marquee direction='left' gradientColor='white,green,red' gradientWidth="500" size="1rem" ><h4>"A book is a gift you can open again and again." - Garrison Keillor</h4></Marquee>

    </div>
  )
}

export default Text