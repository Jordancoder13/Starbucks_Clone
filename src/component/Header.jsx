import React from 'react'
import'./Header.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from '../image/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const  nav = useNavigate()
  return (
    <>
      <div id='Header'>
            <div className='c' id='c1'>
                 <img className='item' id = 'logo' src={logo} onClick ={()=>{nav('/')}}/>
                 <div className='item menu'onClick={()=>{nav('/menu')}}>MENU</div>
                 <div className='item menu'>REWARD</div>
                 <div className='item menu'>GIFT CARDS</div>
             </div>
             <div className='c' id ='c2'>
                <div className='item i' id='map' ><FaMapMarkerAlt id='mapicon'/> Find a store</div>
                <div className='item i btn ' id='my'>Sign in</div>
                <div className='item i btn ' id= 'join'>Join now</div>
                <RxHamburgerMenu id='burger'/>
            </div>
      </div>
    </>
  )
}

export default Header
