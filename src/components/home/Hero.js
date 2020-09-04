import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='container h-100'>
        <div className='hero_wrapper d-flex h-100'>
          <h6>Welcome to ESHOP</h6>
          <h1 className='title-font'>A New online shop experience</h1>
          <Link className='btn-primary' to='/products'>
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
