import React from 'react'
import './TvPage.css'
import { tvData } from '../data/tv'
import Navbar from '../Navbar'

const TvPage = () => {
  
  return (
   <>
   <Navbar/>
   <h2>TV's</h2>
    <div className='tvPageSection'>
      {
              tvData.map((item)=>{
                  return(
                      <div className="tvPageImages">
                          <img src={item.image}  />
                      </div>
      
                  )
              })
            }
    </div>
    </>
  )
}

export default TvPage