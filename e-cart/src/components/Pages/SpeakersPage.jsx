import React from 'react'

import { speakerData } from '../data/speaker'
import './SpeakersPage.css'
import Navbar from '../Navbar'
const SpeakersPage = () => {
  return (
    <>
    <Navbar/>
    <div className="speakerPageSection">
      {
      speakerData.map((item)=>{
                  return(
                    <div className="speakerItemContainer"><div className="speakerPageCard">
                          <img src={item.image} alt="" />
                      </div>
                      <h3 className='speakerProductName'>{item.product}</h3>
                      </div>
                      
                  )
              })
    }
    </div>
    </>
  )
}

export default SpeakersPage

