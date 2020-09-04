import React from 'react'
import Header from '../components/Header'
import ProductsFilter from '../components/Products/ProductsFilter'
import ProductList from '../components/Products/ProductList'
import Pagination from '../components/Products/Pagination'

export default function Products() {
  return (
    <>
      <Header title='The Shop' />
      <ProductsFilter />
      <ProductList />
      <Pagination />
    </>
  )
}
