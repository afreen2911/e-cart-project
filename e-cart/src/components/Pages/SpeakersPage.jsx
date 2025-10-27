import React from 'react'

import { speakerData } from '../data/speaker'
import './SpeakersPage.css'
const SpeakersPage = () => {
  return (
    <>
    <div className="speakersPageSection">
      {
      speakerData.map((item)=>{
                  return(
                      <div className="speakerPageImages">
                          <img src={item.image} alt="" />
                      </div>
                  )
              })
    }
    </div>
    </>
  )
}

export default SpeakersPage

