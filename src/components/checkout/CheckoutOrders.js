import React, { useContext, useState } from 'react'
import { CardElement, StripeProvider, Elements, injectStripe } from 'react-stripe-elements'
import { CartContext } from '../../context/cart'
import { UIContext } from '../../context/ui'
import { useHistory } from 'react-router-dom'
import SubmitOrder from '../../strapi/submitOrder'
import { UserContext } from '../../context/user'
import EmptyCart from '../EmptyCart'

function CheckoutOrders(props) {
  const { totals: total, clearCart, cart } = useContext(CartContext)
  const { showAlert } = useContext(UIContext)
  const { user } = useContext(UserContext)
  const history = useHistory()
  //state
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    showAlert({ msg: 'Submitting Order... Please wait' })
    const response = await props.stripe.createToken().catch((err) => console.log(err))
    console.log(response)
    const { token } = response
    if (token) {
      console.log(token)
      const { id } = token
      const order = await SubmitOrder({ name, total, items: cart, stripeTokenId: id, userToken: user.token })
      console.log(order)
      if (order) {
        showAlert({ msg: 'Your Order is Complete' })
        clearCart()
        history.push('/')
        return
      } else {
        setName('')
        showAlert({ msg: 'There was an error try again', type: 'danger' })
      }
    } else {
      setName('')
      showAlert({ msg: response.error.message, type: 'danger' })
    }
  }
  if (!cart.length) {
    return <EmptyCart />
  }
  return (
    <section className='checkout'>
      <div className='container'>
        <div className='checkout_wrapper'>
          <h1 className='title-font order_title'>
            Order Total : <span>${total}</span>{' '}
          </h1>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form_group w-100'>
              <label htmlFor='name'>Name</label>
              <input type='name' placeholder='Your Name' autoComplete='off' className='w-100' value={name} onChange={(e) => setName(e.target.value.trim())} />
            </div>
            <div className='form_group w-100 strip_el'>
              <label htmlFor='name'>Credit Or Debit Card</label>
              <p>
                Test Using This Credit Card <span>4242 4242 4242 4242</span> <br />
                Entry Any 5 Digits for the zip code <br />
                Entry Any 3 Digits for the CVC
              </p>
              <CardElement className='card_element' />
            </div>
            {name.length > 5 && <button className='btn-primary w-100'>Submit</button>}
          </form>
        </div>
      </div>
    </section>
  )
}

const CardForm = injectStripe(CheckoutOrders)
const StripeWrapper = () => {
  return (
    <StripeProvider apiKey='pk_test_51HFo7sAc7AeGK6mExK96jyi0FBxIQw4N5j9pELp1nVSuQqSSiQgseIUgc1NdV0vAWjDnO8T5jCFMwM5hsrGepC5b00d5nhP2TW'>
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  )
}
export default StripeWrapper
