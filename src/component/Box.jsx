import React from 'react'
import'./Box.css'

const Box = ({heading,para,btn,image,color,rev,heights,textcolor}) => {
    let a;
    if(rev== true)
    {
        a="row-reverse"
    }
    else{
        a= null
    }


  return (
    <>
         <div id='boxes' style={{height:`${heights}`}}>
            <div className ='box' id='b1' style={{float:{a}}}>
            <img  src ={image}/>
            </div>
            <div className='box' id='b2' style={{backgroundColor : `${color}` , color : `${textcolor}`}}>
            <h1>{heading}</h1>
            <p>{para}</p>
            <div className='btn1'>{btn}</div>           
            
             </div>

         </div> 
      
    </>
  )
}

export default Box
