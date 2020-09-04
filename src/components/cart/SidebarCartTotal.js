import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { UserContext } from '../../context/user'
import { Link } from 'react-router-dom'

export default function SidebarCartTotal() {
  const { totals, clearCart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  return (
    <div className='sidebar_cart_totals'>
      <div className='sidebar_cart_totals_value'>
        <h3>Totals</h3>
        <h3>${totals}</h3>
      </div>
      <button className='btn-primary w-100 btn-dark' onClick={() => clearCart()}>
        Clear Cart
      </button>
      {user.token ? (
        <button className='btn-primary w-100'>
          <Link to='/checkout'>Checkout</Link>
        </button>
      ) : (
        <p className='proceed_text'>
          <Link to='/login'>Login</Link> Or <Link to='/register'>Register</Link> To Proceed Checkout
        </p>
      )}
    </div>
  )
}
