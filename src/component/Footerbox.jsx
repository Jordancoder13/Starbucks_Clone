import React from 'react'
import'./Footerbox.css'

const Footerbox = ({heading,arr}) => {
  return (
    <div id='fbox'>
      <div id ="footh">
      {heading}
      </div>
      <ul id="list">
        {
            arr.map((i)=>(
                <li>{i}</li>
            ))
        }
      </ul>   
    </div>
  )
}

export default Footerbox
