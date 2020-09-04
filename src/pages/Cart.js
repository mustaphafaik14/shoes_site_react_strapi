import React, { useContext } from 'react'
import Header from '../components/Header'
import CartList from '../components/cart/CartList'
import CartTotals from '../components/cart/CartTotals'
import EmptyCart from '../components/EmptyCart'
import { CartContext } from '../context/cart'

export default function Cart() {
  const { cart } = useContext(CartContext)
  if (!cart.length) {
    return (
      <>
        <Header title='Shopping Cart' />
        <EmptyCart />
      </>
    )
  }
  return (
    <>
      <Header title='Shopping Cart' />
      <CartList />
      <CartTotals />
    </>
  )
}
