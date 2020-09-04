import React, { useContext } from 'react'
import Title from '../Title'
import { FaAngleDown } from 'react-icons/fa'
import { getUnique } from '../../utils/helpers'
import { ProductContext } from '../../context/products'

export default function ProductsFilter() {
  const {
    products,
    updateFilters,
    filters: { search, category, collection, price },
  } = useContext(ProductContext)
  const categories = ['All', ...getUnique(products, 'category')]
  const collections = ['All', ...getUnique(products, 'collection')]
  const maxPrice = Math.max(...products.map((el) => el.price))
  const minPrice = Math.min(...products.map((el) => el.price))

  return (
    <section className='filters section'>
      <div className='container'>
        <Title title='Filters' />
        <div className='filters_wrapper'>
          <div className='filter_item'>
            <div className='d-flex filter_price'>
              <h3>Filter by Price</h3>
              <h4 className='current_price'>${price}</h4>
            </div>
            <hr />
            <div className='form_group w-100 slider_range'>
              <span className='slider_value slider_value_left'>${minPrice}</span>
              <input type='range' name='price' className='form_control w-100' min={minPrice} max={maxPrice} value={price} onChange={updateFilters} />
              <span className='slider_value slider_value_right'>${maxPrice}</span>
            </div>
          </div>
          <div className='filter_item'>
            <h3>Filter by Category</h3>
            <hr />
            <div className='form_group w-100'>
              <select name='category' className='w-100' value={category} onChange={updateFilters}>
                {categories.map((el, index) => {
                  return (
                    <option value={el} key={index}>
                      {el}
                    </option>
                  )
                })}
              </select>

              <span className='select_icon'>
                <FaAngleDown />
              </span>
            </div>
          </div>
          <div className='filter_item'>
            <h3>Filter by Collections</h3>
            <hr />
            <div className='form_group w-100'>
              <select name='collection' className='w-100' value={collection} onChange={updateFilters}>
                {collections.map((el, index) => {
                  return (
                    <option value={el} key={index}>
                      {el}
                    </option>
                  )
                })}
              </select>
              <span className='select_icon'>
                <FaAngleDown />
              </span>
            </div>
          </div>
          <div className='filter_item'>
            <h3>Filter by Search</h3>
            <hr />
            <div className='form_group w-100'>
              <input type='input' className='form_control form_search w-100' name='search' value={search} onChange={updateFilters} placeholder='Product Name' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
