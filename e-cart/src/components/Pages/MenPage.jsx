import React from 'react'
import './MenPage.css'
import { menData } from '../data/men'
import Navbar from '../Navbar'

const MenPage = () => {
 
  return (
    <>
    <Navbar/>
    
    <>
    <h2>Men</h2>
    <div className='menPagesection'>
       {
        menData.map((item)=>{
            return(
              <><div className='menPageImages'>
                <img src={item.image}  />
                </div>
                <div className="menProductName">
                  <h3>{item.product}</h3>
                </div>
            </>
            )
        })
      }
    </div>
    </>
    </>
  )
}

export default MenPage
