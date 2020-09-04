import React from 'react'

import banner1 from '../../images/banner_1.jpg'
import banner2 from '../../images/banner_2.jpg'
import banner3 from '../../images/banner_3.jpg'
import CollectionItem from './CollectionItem'

export default function Collections() {
  const items = [
    {
      name: "Men's Collection",
      img: banner1,
    },
    {
      name: "Women's Collection",
      img: banner2,
    },
    {
      name: "Kids's Collection",
      img: banner3,
    },
  ]
  return (
    <section className='collections section'>
      <div className='container'>
        <div className='collections_wrapper'>
          {items.map((item, index) => {
            return <CollectionItem {...item} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}
