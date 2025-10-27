import React from 'react'
import './Speakers.css'
import { speakerData } from './data/speaker'
const Speakers = () => {
  const images=speakerData.slice(0,5)
  return (
    <>
    <h3>Speakers</h3>
    <div className="speakerSection">{
      images.map((item)=>{
        return(
          <div className="speakerImages">
            <img src={item.image} alt="" />
          </div>
        )
      })
}
</div>
    </>
  )
}

export default Speakers
