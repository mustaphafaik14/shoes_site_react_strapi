const NUM_BEST_PRODUCTS = 10
export const handleProducts = (products) => {
  const tempProducts = products.map((prod) => {
    const {
      id,
      categories,
      collections,
      description,
      discount,
      featured,
      image: { url: image },
      name,
      num_sells,
      price,
    } = prod
    const category = categories[0].name
    const collection = collections[0].name
    return { id, category, collection, description, name, price, num_sells, discount, featured, image }
  })
  return tempProducts
}

export const handleFeaturedProducts = (products) => products.filter((el) => el.featured)

export const handleBestProducts = (products) =>
  products
    .sort((a, b) => a.num_sells - b.num_sells)
    .reverse()
    .slice(0, NUM_BEST_PRODUCTS)

export const handleDiscount = (price, discount) => {
  let discountedPrice = price - price * (discount / 100)
  return discountedPrice.toFixed(2)
}

export const getUnique = (products, type) => [...new Set(products.map((el) => el[type]))]

export const paginate = (products) => {
  const itemsPerPage = 12
  const numberOfPages = Math.ceil(products.length / itemsPerPage)
  const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return products.slice(start, itemsPerPage + start)
  })
  return newProducts
}

export const getCartFromLocalStorage = () => (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

export const getUserFromLocalStorage = () => (localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { username: null, token: null })
