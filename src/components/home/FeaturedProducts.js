import React, { useContext } from 'react'
import Title from '../Title'
import Product from '../Product'
import { ProductContext } from '../../context/products'

export default function FeaturedProducts() {
  const { featuredProducts } = useContext(ProductContext)
  return (
    <section className='section'>
      <Title title='Featured Products' />
      <div className='container'>
        <div className='featured_products product_list'>
          {featuredProducts.map((product) => {
            return <Product {...product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  )
}
