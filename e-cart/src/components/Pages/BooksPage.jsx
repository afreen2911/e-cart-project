import React from 'react'
import './BooksPage.css'
import {booksData} from '../data/books'
import Navbar from '../Navbar'
const BooksPage = () => {
  return (
    <>
    <Navbar/>
    <div className='booksPageSection'>
      {
        booksData.map((item)=>{
            return(
                <div className="booksPageImages">
                    <img src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>

    </>
    
  )
}

export default BooksPage
