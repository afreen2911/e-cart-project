import React from 'react'
import './Women.css'
import { womanData } from './data/woman'

const Women = () => {
  const images=womanData.slice(0,5)
  return (
    <>
    <h3>Women</h3>
    <div className='womenSection'>
       {
      images.map((item)=>{
            return(
                <div className='womenImages'>
                <img src={item.image}  />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Women
