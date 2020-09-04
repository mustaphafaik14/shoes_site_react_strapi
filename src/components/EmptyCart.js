import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className='container'>
      <div className='empty_cart_wrapper'>
        <span className='cart_empty_icon'>
          <FiShoppingCart />
        </span>
        <h1 className='title-font prodcut_list_empty'>Cart is empty</h1>
        <Link className='btn-primary' to='/'>
          Return Home
        </Link>
      </div>
    </div>
  )
}
