import React, { useContext } from 'react'
import { UIContext } from '../context/ui'

export default function Alert() {
  const { alert } = useContext(UIContext)

  return (
    <div className={`alert ${alert.show ? 'show' : ''} ${alert.type === 'danger' ? 'alert-danger' : ''}`}>
      <h1 className='title-font'>{alert.msg}</h1>
    </div>
  )
}
