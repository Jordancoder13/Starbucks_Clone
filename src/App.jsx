import React from 'react'
import Header from './component/Header'
import './App.css'
import Box from './component/Box'
import arr from './component/Boxdata'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <center>
        {
          arr.map((i) => (
            <Box
              heading={i.heading}
              para={i.para}
              btn={i.btn} 
              image ={i.img}
              color ={i.color}
              rev={i.rev}
              heights = {i.height}
              textcolor={i.textcolor}
            />
          ))}
        <div id ="para">*Menu limited. Restricted delivery area. Available in participating locations only. Fees subject to change. Prices for Starbucks® items purchased through DoorDash or Uber Eats may be higher than posted in stores or as marked. Your delivery order may be limited in any one transaction to one hundred dollars ($100) before taxes, tip, and fees. We may adjust this limit at any time at our discretion. See each delivery app for details.</div>
        <div  id="line">**Impossible is a trademark of Impossible Foods Inc. Used under license.</div>
        <Footer/>
        </center>
      </div>
      )}
export default App
