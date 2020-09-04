import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'
import { handleProducts, handleBestProducts, handleFeaturedProducts, paginate } from '../utils/helpers'
import Loading from '../components/Loading'

export const ProductContext = createContext()

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [featuredProducts, setProductsFeatured] = useState([])
  const [bestProducts, setBestProducts] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])
  const [page, setPage] = useState(0)
  const [filters, setFilters] = useState({
    search: '',
    price: 0,
    category: 'all',
    collection: 'all',
  })
  const [loading, setLoading] = useState(true)

  //use effect for load all data

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source()
    async function fetchData() {
      try {
        const response = await Axios.get('/products', { cancelToken: ourRequest.token })
        const newProducts = handleProducts(response.data)
        setProducts(newProducts)
        setProductsFeatured(handleFeaturedProducts(newProducts))
        setBestProducts(handleBestProducts(newProducts))
        setSortedProducts(paginate(newProducts))
        let maxPrice = Math.max(...newProducts.map((el) => el.price))
        setFilters((prev) => {
          return { ...prev, price: maxPrice }
        })
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
    return () => {
      ourRequest.cancel()
    }
  }, [])

  //use effect
  useEffect(() => {
    const { search, price, category, collection } = filters
    let newProducts = [...products]

    //category
    if (category.toLowerCase() !== 'all') {
      newProducts = newProducts.filter((el) => el.category.toLowerCase() === category.toLocaleLowerCase())
    }
    //collection
    if (collection.toLowerCase() !== 'all') {
      newProducts = newProducts.filter((el) => el.collection.toLowerCase() === collection.toLocaleLowerCase())
    }
    //price
    newProducts = newProducts.filter((el) => el.price <= price)
    //search
    if (search.toLowerCase().trim() !== '') {
      newProducts = newProducts.filter((item) => {
        let tempTitle = item.name.toLowerCase().trim()
        let tempSearch = search.toLowerCase().trim()
        return tempTitle.includes(tempSearch)
      })
    }

    setPage(0)
    setSortedProducts(paginate(newProducts))
  }, [filters, products])

  // get single product
  const getProduct = (id) => products.find((el) => el.id === id)
  //change page
  const changePage = (index) => setPage(index)

  const updateFilters = (e) => {
    const name = e.target.name
    const value = name === 'price' ? e.target.value * 1 : e.target.value
    setFilters({ ...filters, [name]: value })
  }

  if (loading) {
    return <Loading />
  }

  return <ProductContext.Provider value={{ filters, updateFilters, products, sortedProducts, page, changePage, bestProducts, featuredProducts, getProduct }}>{children}</ProductContext.Provider>
}
