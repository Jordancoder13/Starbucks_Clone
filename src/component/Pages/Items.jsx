import React from 'react'
import './Item.css'

const Items = ({ heading, it }) => {
  return (
    <div id='itembox'>
      <h1 id="bh1">
      {heading}
      </h1>
      <ul id="dish">
        {
            it.map((i)=>( 
                <li id="st">{i}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Items
