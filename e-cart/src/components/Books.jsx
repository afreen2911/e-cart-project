import React from 'react'
import './Books.css'
import { booksData } from './data/books'
const Books = () => {
  const images=booksData.slice(0,5)
  return (
    <>
    <h3>Books</h3>
    <div className="booksSection">
      {
        images.map((item)=>{
          return(
            <div className="booksImages">
              <img src={item.image} alt="" />
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Books
