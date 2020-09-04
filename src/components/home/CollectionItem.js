import React from 'react'
import { Link } from 'react-router-dom'

export default function CollectionItem({ name, img }) {
  return (
    <div className='collection_item' style={{ background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url("${img}") center/cover` }}>
      <h1 className='title-font'>{name}</h1>
      <Link to='/products' className='btn-primary collection_btn'>
        Shop Now
      </Link>
    </div>
  )
}
