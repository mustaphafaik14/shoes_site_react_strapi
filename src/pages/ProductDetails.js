import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/products'
import { handleDiscount } from '../utils/helpers'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { CartContext } from '../context/cart'
import { UIContext } from '../context/ui'
import Error from '../pages/Error'

export default function ProductDetails() {
  const { id } = useParams()
  const { getProduct } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)
  const { openSidebarCart } = useContext(UIContext)
  let [amount, setAmount] = useState(1)
  const product = getProduct(id * 1)
  if (!product) {
    return <Error />
  }
  const { name, price, description, discount, category, collection, image } = product

  const IncreaseAmount = () => {
    amount++
    setAmount(amount)
  }
  const DecreaseAmount = () => {
    amount--
    if (amount < 1) {
      amount = 1
    }
    setAmount(amount)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addToCart(id * 1, amount)
    openSidebarCart()
  }

  return (
    <>
      <Header title={name}></Header>
      <div className='product_details container section'>
        <div className='product_details_img'>
          <img src={image} alt={name} />
        </div>
        <div className='product_details_info'>
          <h2 className='product_details_title title-font'>{name}</h2>
          {discount > 0 ? (
            <h4 className='product_details_price'>
              ${handleDiscount(price, discount)} - <del>${price}</del>
            </h4>
          ) : (
            <h4 className='product_details_price'>${price}</h4>
          )}

          <p className='product_details_summary'>{description}</p>
          <h4 className='product_details_category'>
            {' '}
            Category : <span>{category}</span>
          </h4>
          <h4 className='product_details_category'>
            {' '}
            Collection : <span>{collection}</span>
          </h4>
          <form className='add_to_cart_form d-flex' onSubmit={handleSubmit}>
            <div className='add_to_cart_quantity'>
              <button type='button' onClick={() => DecreaseAmount()}>
                <FaAngleDown />
              </button>
              <span>{amount}</span>
              <button type='button' onClick={() => IncreaseAmount()}>
                <FaAngleUp />
              </button>
            </div>
            <button className='btn-primary' type='submit'>
              Add To Cart
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
