import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//pages
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Error from './pages/Error'
//components
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PrivateRoute from './components/PrivateRoute'
import RestrictRoute from './components/RestrictRoute'

function App() {
  return (
    <Router>
      <Alert />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/products/:id' component={ProductDetails} />
        <PrivateRoute exact path='/checkout' component={Checkout} />
        <RestrictRoute exact path='/login' component={Login} />
        <RestrictRoute exact path='/register' component={Register} />
        <Error path='*' component={Error} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
