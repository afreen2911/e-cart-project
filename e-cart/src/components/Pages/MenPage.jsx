import React from 'react'
import './MenPage.css'
import { menData } from '../data/men'
import Navbar from '../Navbar'

const MenPage = () => {
 
  return (
    <>
    <Navbar/>
    <div className='menPageSection'>
      {
        menData.map((item)=>{
            return(
              <div className="menItemContainer">
                <div className='menPageCard'>
                <img src={item.image}  />
                </div>
                  <h3 className="menProductName">
            {item.type}
            </h3>
              </div>
            )
        })
      }
    </div>
    </>
  )
}

export default MenPage
