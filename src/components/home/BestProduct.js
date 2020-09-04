import React, { useContext } from 'react'
import Title from '../Title'
import Product from '../Product'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ProductContext } from '../../context/products'

export default function FeaturedProducts() {
  const { bestProducts } = useContext(ProductContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
  }
  return (
    <section className='section'>
      <Title title='Best Products' />
      <div className='container'>
        <Slider {...settings} className='best_products'>
          {bestProducts.map((product) => {
            return <Product {...product} key={product.id} />
          })}
        </Slider>
      </div>
    </section>
  )
}
