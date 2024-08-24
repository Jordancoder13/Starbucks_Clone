import React from 'react'
import a from './Foooterdata'
import Footerbox from './Footerbox'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="foot">
    {
      a.map((i)=>(
        <Footerbox
        heading ={i.heading}
        arr ={i.arr}
        /> 
      ))
    }
    </footer>
  )
}

export default Footer
