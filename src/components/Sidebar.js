import React, { useContext } from 'react'
import SidebarCartItem from './cart/SidebarCartItem'
import { FaTimes } from 'react-icons/fa'
import SidebarCartTotal from './cart/SidebarCartTotal'
import { UIContext } from '../context/ui'
import { CartContext } from '../context/cart'

export default function Sidebar() {
  const { cart } = useContext(CartContext)
  const { closeidebarCart, sidebarIsOpen } = useContext(UIContext)
  return (
    <div className={`sidebar ${sidebarIsOpen ? 'show' : ''} `}>
      <button className='close_sidebar' onClick={closeidebarCart}>
        <FaTimes />
      </button>
      <div className='sidebar_items'>
        <div className='sidebar_items_wrapper'>
          {!cart.length ? (
            <div className='container'>
              <h3 className='title-font prodcut_list_empty'>Cart Is Empty</h3>
            </div>
          ) : (
            cart.map((cartItem, index) => {
              return <SidebarCartItem {...cartItem} key={index} />
            })
          )}
        </div>
        <SidebarCartTotal />
      </div>
    </div>
  )
}
