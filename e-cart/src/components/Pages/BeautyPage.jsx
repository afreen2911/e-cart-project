import React from 'react'
import { beautyData } from '../data/beauty'
const BeautyPage = () => {
  return (
    <>
    <div className="beautyPageSection">
        {
            beautyData.map((item)=>{
                        return(
                            <div className="mobilePageImages">
                                <img src={item.image} alt="" />
                            </div>
                        )
                    })
        }
    </div>
    </>
  )
}

export default BeautyPage
