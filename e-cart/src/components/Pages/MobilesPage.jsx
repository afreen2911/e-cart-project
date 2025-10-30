import React from 'react'
import { mobileData } from '../data/mobiles'
import './MobilesPage.css'  
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const MobilesPage = () => {
  return (
    <>
    <Navbar/>
    <div className="mobilesPageSection">
      {
      mobileData.map((item) => {
        return(
          <div className="mobileItemContainer">
          <Link to={`/mobilespage/${item.id}`}>
          <div className="mobilesPageCard">
            <img src={item.image} alt="" />
          </div>
          </Link>
          <h3 className="mobilesProductName">
            {item.model}
            </h3> {/* ✅ Outside the card */}
        </div>
        )
      })
      }
    </div>
  
    </>
  )
}



export default MobilesPage
