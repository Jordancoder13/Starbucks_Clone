import React from 'react'
import Header from '../Header'
import './Menu.css'
import arr from './MenuBoxData'
import Items from './Items'
import Footer from '../Footer'
import Menufooter from './Menufooter'
import Menuitem from'./Menuitem'
import a from './Menuitemdata'

const Menu = () => {
  return (
    <>
      <Header />
      <div id='mhead'>
        <div className='mcu'>Menu</div>
        <div className='mcu'>Featured</div>
        <div className='mcu'>Previous</div>
        <div className='mcu'>Favorites</div>
      </div>
      <div id="ct">
        <div id='mb1'>
          {
            arr.map((i) => (
              <Items
                heading={i.heading}
                it={i.item}
              />
            ))
          }
        </div>
        <div id='mb2'>
          <h1>Menu</h1>
          <h2>Drinks</h2>
          <div id="mi">
          {
           a.map((i)=>(
            <Menuitem
            name= {i.name}
            imgname = {i.imgname}
             />
          ))}
          </div>
        </div>
      </div> 
      <Footer />
      <Menufooter />
    </>
  )
}

export default Menu
