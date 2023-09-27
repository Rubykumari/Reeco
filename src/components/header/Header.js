import React from 'react'
import './Header.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart from '../../images/cart.png'
function Header() {
  return (
    <>
      <div className='header'>
        <div className="headerMenu">
          <div className="rheader">
             <ul>
              <li>Reeco</li>
              <li>Store</li>
              <li>Order</li>
              <li>Analytics</li>
             </ul>
          </div>
          <div className="lheader">
            {/* <i className='fa fa-shopping-cart'></i> */}
            {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
          <img src={Cart} alt="cartIcon" className='fa fa-shopping-cart'/>
            <p>Hello, Ruby</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header