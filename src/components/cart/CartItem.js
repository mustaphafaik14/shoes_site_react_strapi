import React, { useContext } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { handleDiscount } from '../../utils/helpers'
import { CartContext } from '../../context/cart'
import { UIContext } from '../../context/ui'

export default function CartItem({ id, price, name, image, discount, amount, total }) {
  const { increaseAmount, removeCartItem, decreaseAmount } = useContext(CartContext)
  const { showAlert } = useContext(UIContext)
  return (
    <div className='cart_item'>
      <div className='cart_item_img'>
        <img src={image} alt={name} className='w-100' />
      </div>
      <div className='cart_item_info'>
        <div className='cart_item_title'>{name}</div>
        <div>${discount > 0 ? handleDiscount(price, discount) * 1 : price}</div>
        <div className='cart_item_quantity'>
          <button onClick={() => increaseAmount(id)}>
            <MdKeyboardArrowUp />
          </button>
          <span>{amount}</span>
          <button onClick={() => decreaseAmount(id)}>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className='cart_item_price'>${total}</div>
        <div>
          <button
            className='cart_item_remove'
            onClick={() => {
              removeCartItem(id)
              showAlert({ msg: `${name} removed from you cart`, type: 'danger' })
            }}
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  )
}
