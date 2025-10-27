import React from 'react'
import { mobileData } from '../data/mobiles'
import './MobilesPage.css'  
import Navbar from '../Navbar'

const MobilesPage = () => {
  return (
    <>
    <Navbar/>
    <div className="mobilesPageSection">
      {
      mobileData.map((item) => (
        <div className="mobileItemContainer">
          <div className="mobilesPageCard">
            <img src={item.image} alt={item.product} />
          </div>
          <h3 className="mobilesProductName">
            {item.company}
            </h3> {/* ✅ Outside the card */}
        </div>
      ))}
    </div>
  
    </>
  )
}



export default MobilesPage
