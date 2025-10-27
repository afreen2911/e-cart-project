import React from 'react'
import './TvPage.css'
import { tvData } from '../data/tv'
import Navbar from '../Navbar'

const TvPage = () => {
  
  return (
   <>
   <Navbar/>
    <div className='tvPageSection'>
      {
              tvData.map((item)=>{
                  return(
                    <div className="tvItemContainer">
                      <div className="tvPageCard">
                          <img src={item.image}  />
                      </div>
                      <h3 className='tvProductName'>{item.brand}</h3>
                    </div>
                      
      
                  )
              })
            }
    </div>
    </>
  )
}

export default TvPage