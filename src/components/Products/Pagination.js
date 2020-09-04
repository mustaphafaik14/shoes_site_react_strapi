import React, { useContext } from 'react'
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs'
import { ProductContext } from '../../context/products'

export default function Pagination() {
  const { sortedProducts, page, changePage } = useContext(ProductContext)
  return (
    <section className='section'>
      <div className='container'>
        {sortedProducts.length > 1 && (
          <div className='pagination_wrapper d-flex'>
            {page > 0 && (
              <button className='page_btn current_btn' onClick={() => changePage(page - 1)}>
                <BsChevronDoubleLeft />
              </button>
            )}
            {sortedProducts.map((_, index) => {
              return (
                <button key={index} className={`page_btn ${page === index && 'current_btn'}`} onClick={() => changePage(index)}>
                  {index + 1}
                </button>
              )
            })}

            {sortedProducts.length - 1 > page && (
              <button className='page_btn current_btn' onClick={() => changePage(page + 1)}>
                <BsChevronDoubleRight />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
