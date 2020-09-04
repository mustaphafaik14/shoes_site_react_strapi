import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../../strapi/auth'
import { UserContext } from '../../context/user'
import { UIContext } from '../../context/ui'

export default function LoginForm() {
  const { showAlert } = useContext(UIContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const { userLogin } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await login(email, password)
    if (response.status === 200 && response.data) {
      const {
        user: { username },
        jwt: token,
      } = response.data
      const newUser = { username, token }
      userLogin(newUser)
      history.push('/products')
      showAlert({ msg: 'Logged in successfully' })
    } else {
      const message = response.data.message[0].messages[0].message
      showAlert({ msg: message, type: 'danger' })
    }
  }

  return (
    <div className='container login form_account'>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='title-font'>Login</h2>
        <div className='form_group w-100'>
          <input type='email' placeholder='Your Email' autoComplete='off' className='w-100' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form_group w-100'>
          <input type='password' placeholder='Your Password' autoComplete='off' className='w-100' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='btn-primary w-100'>Login</button>
      </form>
      <p>
        Don't Have an Account? <Link to='/register'>Sign up now</Link>
      </p>
    </div>
  )
}
