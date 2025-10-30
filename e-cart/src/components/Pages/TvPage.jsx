import React from 'react'
import './TvPage.css'
import { tvData } from '../data/tv'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const TvPage = () => {
  
  return (
   <>
   <Navbar/>
    <div className='tvPageSection'>
      {
              tvData.map((item)=>{
                  return(
                  
                    <div className="tvItemContainer">
                      <Link to={`/tvpage/${item.id}`}>
                      <div className="tvPageCard">
                          <img src={item.image} alt='' />
                      </div>
                      </Link>
                      
                      
                      
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