import React from 'react'
import { tabletData } from '../data/tablets'
import './TabletPage.css'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const TabletPage = () => {
  
  return (
    <>
    <Navbar/>
    <div className='tabletPageSection'>
      {
        tabletData.map((item)=>{
            return(
                <div className="tabletItemContainer">
                  <Link to={`/tabletspage/${item.id}`}>
                  <div className="tabletImageCard">
                    <img src={item.image}  alt=''/>
                  </div>
                  </Link>
                  <h3 className="tabletProductName">
                  {item.company}
                </h3>
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default TabletPage
