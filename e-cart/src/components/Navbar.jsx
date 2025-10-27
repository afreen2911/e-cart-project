import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navSection'>
        <div className="title">E-Cart</div>
        <div className="middlesection">
            <input type="text" className='search' placeholder='Search...'/>
        </div>
        <div className="rightSection">
            <p>SignIN/SignUp</p>
            <p>Cart</p>
        </div>
        <br />
        <ul>
          <Link to ={ '/mobilespage' }><li>Mobiles</li></Link>
          <Link to={'/tabletspage'}><li>Tablets</li></Link>
          <Link to={'/tvspage'}><li>TV's</li></Link>
          <Link to={'/womenpage'}><li>Women</li></Link>
          <Link to={'/menpage'}><li>Men</li></Link>
          <Link to={'/kidspage'}><li>Kids</li></Link>
          <Link to={'/homekitchenpage'}><li>Home&Kitchen</li></Link>
          <Link to={'/computerspage'}><li>Computers</li></Link>
          <Link to={'/watchespage'}><li>Watches</li></Link>
          <Link to={'/furniturepage'}><li>Furniture</li></Link>
          <Link to={'/refrigeratorpage'}><li>Refrigerators</li></Link>
          <Link to={'/bookspage'}><li>Books</li></Link>
          <Link to={'/speakerspage'}><li>Speakers</li></Link>
          <Link to={'/acpage'}><li>AC</li></Link>
          <Link to={'/beautypage'}><li>Beauty</li></Link>   
        </ul>
      
    </div>
  )
}

export default Navbar
