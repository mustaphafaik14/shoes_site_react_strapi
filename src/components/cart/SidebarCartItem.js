import React, { useContext } from 'react'
import { BsTrashFill } from 'react-icons/bs'
import { handleDiscount } from '../../utils/helpers'
import { CartContext } from '../../context/cart'
import { UIContext } from '../../context/ui'

export default function SidebarCartItem({ id, image, name, discount, price, amount, total }) {
  const { removeCartItem } = useContext(CartContext)
  const { showAlert } = useContext(UIContext)
  return (
    <div className='sidebar_item'>
      <div className='sidebar_item_img'>
        <img src={image} alt='img' className='w-100' />
      </div>
      <div className='sidebar_item_info'>
        <h3>{name}</h3>
        <p>
          ${discount > 0 ? handleDiscount(price, discount) * 1 : price} {`(${amount})`} - <span className='title-font'>${total}</span>
        </p>
        <button
          onClick={() => {
            removeCartItem(id)
            showAlert({ msg: `${name} removed from you cart`, type: 'danger' })
          }}
        >
          <BsTrashFill />
        </button>
      </div>
    </div>
  )
}
