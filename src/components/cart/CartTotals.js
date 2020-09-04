import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { UserContext } from '../../context/user'
import { Link } from 'react-router-dom'

export default function CartTotals() {
  const { totals, clearCart, cart } = useContext(CartContext)
  const { user } = useContext(UserContext)

  if (cart.length) {
    return (
      <div className='cart_totals container'>
        <div className='totals d-flex'>
          <h3>Totals</h3>
          <h3>${totals}</h3>
        </div>
        <button className='btn-primary w-100 btn-dark' onClick={clearCart}>
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
}
