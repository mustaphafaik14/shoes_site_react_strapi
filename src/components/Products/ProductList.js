import React, { useContext } from 'react'
import Product from '../Product'
import { ProductContext } from '../../context/products'

export default function ProductList() {
  const { sortedProducts, page } = useContext(ProductContext)
  if (!sortedProducts.length) {
    return (
      <div className='container'>
        <h1 className='title-font prodcut_list_empty'>No Products Found</h1>
      </div>
    )
  }
  return (
    <section className='section products'>
      <div className='container'>
        <div className='product_list'>
          {sortedProducts[page].map((product) => {
            return <Product {...product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  )
}
