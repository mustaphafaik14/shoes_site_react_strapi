import React from 'react'

export default function Header({ title }) {
  return (
    <section className='header section'>
      <div className='container h-100'>
        <div className='header_wrapper h-100'>
          <h1 className='title-font'>{title}</h1>
        </div>
      </div>
    </section>
  )
}
