import React from 'react'
import './BeautyPage.css'
import { beautyData } from '../data/beauty'
import Navbar from '../Navbar'
const BeautyPage = () => {
  return (
    <>
    <Navbar/>
    <div className="beautyPageSection">
        {
            beautyData.map((item)=>{
                        return(
                          <div className="beautyItemContainer">
                            <div className="beautyPageCard">
                                <img src={item.image} alt="" />
                            </div>
                            <h3 className='beautyProductName'>{item.product}</h3>
                          </div>
                            
                        )
                    })
        }
    </div>
    </>
  )
}

export default BeautyPage
