import React, { useContext } from 'react'
import ColumnCart from './ColumnCart'
import CartItem from './CartItem'
import { CartContext } from '../../context/cart'

export default function CartList() {
  const { cart } = useContext(CartContext)

  return (
    <div className='container section cart_list'>
      <ColumnCart />
      <div className='cart_list_wrapper w-100'>
        {cart.map((cartItem, index) => {
          return <CartItem {...cartItem} key={index} />
        })}
      </div>
    </div>
  )
}
