import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
      <Header title='Error Page' />
      <div className='error_wrapper container'>
        <h1 className='title-font'>404</h1>
        <h3>Oops! This Page Could not be found</h3>
        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
        <Link to='/' className='btn-primary'>
          Return Home
        </Link>
      </div>
    </>
  )
}
