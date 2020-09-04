import React, { useContext } from 'react'
import { FaEye, FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { handleDiscount } from '../utils/helpers'
import { CartContext } from '../context/cart'
import { UIContext } from '../context/ui'

export default function Product({ id, image, name, price, discount }) {
  const { addToCart } = useContext(CartContext)
  const { openSidebarCart, showAlert } = useContext(UIContext)

  return (
    <>
      <div className='product_item'>
        <div className='product_item_img w-100'>
          <img src={image} alt={name} className='w-100' />
          <div className='product_links'>
            <Link className='product_item_link' to={`/products/${id}`}>
              <FaEye />
            </Link>
            <button
              className='product_item_link'
              onClick={() => {
                addToCart(id)
                openSidebarCart()
                showAlert({ msg: `${name} Add to cart` })
              }}
            >
              <FaCartPlus />
            </button>
          </div>
        </div>
        <div className='product_info'>
          <Link to='/product'>
            <h3>{name}</h3>
          </Link>
          {discount > 0 ? (
            <h3 className='product_price'>
              ${handleDiscount(price, discount)} - <del className='product_price_discount'>${price}</del>
            </h3>
          ) : (
            <h3 className='product_price'>${price}</h3>
          )}
        </div>
        {discount > 0 && <div className='product_tag'>-{discount}%</div>}
      </div>
    </>
  )
}
