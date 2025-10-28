import React from 'react'
import './BooksPage.css'
import {booksData} from '../data/books'
import Navbar from '../Navbar'
const BooksPage = () => {
  return (
    <>
    <Navbar/>
    <div className='bookPageSection'>
      {
        booksData.map((item)=>{
            return(
              <div className="bookItemContainer">
                <div className="bookPageCard">
                    <img src={item.image} alt="" />
                </div>
                <h3 className='bookProductName'>{item.title}</h3>
              </div>
                
            )
        })
      }
    </div>

    </>
    
  )
}

export default BooksPage
