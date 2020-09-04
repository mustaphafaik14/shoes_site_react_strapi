import React from 'react'
import { FaShippingFast, FaMoneyBillAlt, FaRegHandshake } from 'react-icons/fa'

export default function Featured() {
  const items = [
    {
      title: 'FREE DELIVERY',
      icon: <FaShippingFast />,
      desc: 'When order from $250.',
    },
    {
      title: '100% REFUND OF MONEY',
      icon: <FaMoneyBillAlt />,
      desc: '14-days of complanint.',
    },
    {
      title: 'QUALITY INSPECTIONS',
      icon: <FaRegHandshake />,
      desc: 'Over 10,000 products.',
    },
  ]
  return (
    <section className='featured  section'>
      <div className='container'>
        <div className='featured_wrapper w-100'>
          {items.map((el, index) => {
            return (
              <div key={index} className='footer_up_item d-flex'>
                <div className='footer_up_item_icon'>{el.icon}</div>
                <div className='footer_up_item_info'>
                  <h3 className='title-font'>{el.title}</h3>
                  <p>{el.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
