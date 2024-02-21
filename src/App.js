import React from 'react';
import Navbar from "../src/Components/Navbar"
import  Tabs  from '../src/Components/Tabs';
import Footer from "../src/Components/Footer" 
import Hero from "../src/Components/Hero"
import Text from './Components/Text';
import Features from "../src/Components/Features";

import "./App.css"
import whatsappimage from "../src/whatsappimage.png"

import BookCard from '../src/Components/BookCard.js';
function App() {
  return (
    <>
<Text/>
    <Navbar/>
    <Tabs/>
    <Hero/>
    <Features/>
    <BookCard/>
    <Footer/>
    <div>
   <a href='https://wa.me/00000000' target='_blank'> <img src={whatsappimage} alt='...' className='wimage'/></a>
</div>





    </>
  );
}

export default App;
