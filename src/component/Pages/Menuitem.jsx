import React from 'react'
const Menuitem = ({name,imgname}) => {
  return (
    <>
      <div className='mitem'>
        <img className='circle' src={imgname}/>
        <p>{name}</p>
      </div>
    </>
  )
}

export default Menuitem
