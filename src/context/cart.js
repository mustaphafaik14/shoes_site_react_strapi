import React, { createContext, useState, useEffect, useContext } from 'react'
import { ProductContext } from './products'
import { handleDiscount, getCartFromLocalStorage } from '../utils/helpers'

export const CartContext = createContext()

export default function CartProvider({ children }) {
  const { getProduct } = useContext(ProductContext)
  const [cart, setCart] = useState(getCartFromLocalStorage())
  const [totals, setTotals] = useState(0)
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    const totalPrice = cart.reduce((accu, item) => {
      const finalPrice = item.discount > 0 ? handleDiscount(item.price, item.discount) * 1 : item.price
      accu += item.amount * finalPrice
      return accu
    }, 0)
    const totalCartItems = cart.reduce((accu, item) => {
      accu += item.amount
      return accu
    }, 0)
    setTotals(totalPrice.toFixed(2))
    setCartItems(totalCartItems)
  }, [cart])

  const addToCart = (id, amount = 1) => {
    const product = getProduct(id)
    let tempCart = [...cart]
    let tempItem = tempCart.find((el) => el.id === product.id)
    if (!tempItem) {
      let total = product.discount > 0 ? handleDiscount(product.price, product.discount) * 1 : product.price
      let cartItem = { ...product, amount, total }
      tempCart = [...tempCart, cartItem]
    } else {
      tempItem.amount++
      const ifDiscount = tempItem.discount > 0 ? handleDiscount(product.price, product.discount) * 1 : product.price
      tempItem.total = (tempItem.amount * ifDiscount).toFixed(2)
    }
    setCart(tempCart)
  }

  const increaseAmount = (id) => {
    const tempCart = [...cart]
    let tempItem = tempCart.find((el) => el.id === id)
    tempItem.amount++
    const ifDiscount = tempItem.discount > 0 ? handleDiscount(tempItem.price, tempItem.discount) * 1 : tempItem.price
    tempItem.total = (tempItem.amount * ifDiscount).toFixed(2)
    setCart(tempCart)
  }
  const decreaseAmount = (id) => {
    const tempCart = [...cart]
    let tempItem = tempCart.find((el) => el.id === id)
    tempItem.amount--
    if (tempItem.amount === 0) {
      removeCartItem(id)
      return
    }
    const ifDiscount = tempItem.discount > 0 ? handleDiscount(tempItem.price, tempItem.discount) * 1 : tempItem.price
    tempItem.total = (tempItem.amount * ifDiscount).toFixed(2)
    setCart(tempCart)
  }
  const removeCartItem = (id) => {
    const tempCart = [...cart].filter((el) => el.id !== id)
    setCart(tempCart)
  }
  const clearCart = () => {
    setCart([])
  }

  return <CartContext.Provider value={{ clearCart, decreaseAmount, removeCartItem, increaseAmount, cart, addToCart, totals, cartItems }}>{children}</CartContext.Provider>
}
