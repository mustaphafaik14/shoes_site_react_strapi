import React from 'react'
import Hero from '../components/home/Hero'
import Collections from '../components/home/Collections'
import FeaturedProducts from '../components/home/FeaturedProducts'
import BestProduct from '../components/home/BestProduct'
import Banner from '../components/home/Banner'
import Featured from '../components/home/Featured'

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Collections />
      <FeaturedProducts />
      <Banner />
      <BestProduct />
    </>
  )
}
