import React from 'react'
import Header from '../components/Header'
import CheckoutOrders from '../components/checkout/CheckoutOrders'

export default function Checkout() {
  return (
    <>
      <Header title='Checkout' />
      <CheckoutOrders />
    </>
  )
}
