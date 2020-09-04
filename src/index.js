import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import UIProvider from './context/ui'
import CartProvider from './context/cart'
import ProductProvider from './context/products'

//Axios
import { URL } from './utils/URL'
import Axios from 'axios'
import UserProvider from './context/user'
Axios.defaults.baseURL = URL

ReactDOM.render(
  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </CartProvider>
    </ProductProvider>
  </UserProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
