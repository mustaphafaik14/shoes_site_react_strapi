import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaRegUser, FaCartPlus } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { UIContext } from '../context/ui'
import { GrMenu } from 'react-icons/gr'
import { CartContext } from '../context/cart'
import { UserContext } from '../context/user'

export default function Navbar() {
  const history = useHistory()
  const { cartItems } = useContext(CartContext)
  const { openSidebarCart, navIsOpen, handleNav, closeNav } = useContext(UIContext)
  const { user, userLogout } = useContext(UserContext)

  const handleLogoutUser = () => {
    userLogout()
    history.push('/')
  }

  return (
    <nav className='navbar'>
      <div className='container h-100'>
        <div className='navbar_wrapper d-flex align-center h-100'>
          <button className='nav_menu' onClick={handleNav}>
            <GrMenu />
            &nbsp;Menu
          </button>
          <Link to='/' className='logo' onClick={closeNav}>
            <h1>ESHOP</h1>
          </Link>
          <ul className={`nav_list d-flex ${navIsOpen ? 'show' : ''}`}>
            <li className='nav_item'>
              <Link to='/' className='nav_link' onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className='nav_item'>
              <Link to='/products' className='nav_link' onClick={closeNav}>
                Products
              </Link>
            </li>
            <li className='nav_item'>
              <Link to='/cart' className='nav_link' onClick={closeNav}>
                Cart
              </Link>
            </li>
            {user.token && (
              <li className='nav_item'>
                <Link to='/checkout' className='nav_link' onClick={closeNav}>
                  Checkout
                </Link>
              </li>
            )}
          </ul>
          <div className='navbar_icons d-flex'>
            {!user.token ? (
              <Link className='nav_account' to='/login'>
                <FaRegUser />
              </Link>
            ) : (
              <button className='nav_account logout_btn' onClick={() => handleLogoutUser()}>
                <FiLogOut />
              </button>
            )}
            <button className='nav_shopping' onClick={openSidebarCart}>
              <FaCartPlus />
              <span className='cart_items'>{cartItems}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
