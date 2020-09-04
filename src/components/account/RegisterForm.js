import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { register } from '../../strapi/auth'
import { UserContext } from '../../context/user'
import { UIContext } from '../../context/ui'

export default function RegisterForm() {
  const { showAlert } = useContext(UIContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const history = useHistory()
  const { userLogin } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await register(username, email, password)
    if (response.status === 200 && response.data) {
      const {
        user: { username },
        jwt: token,
      } = response.data
      const newUser = { username, token }
      userLogin(newUser)
      history.push('/products')
      showAlert({ msg: 'Your Account is created' })
    } else {
      const message = response.data.message[0].messages[0].message
      showAlert({ msg: message, type: 'danger' })
    }
  }

  return (
    <div className='container register form_account'>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='title-font'>Register</h2>
        <div className='form_group w-100'>
          <input type='text' placeholder='Your Username' autoComplete='off' className='w-100' onChange={(e) => setUsername(e.target.value)} value={username} />
        </div>
        <div className='form_group w-100'>
          <input type='email' placeholder='Your Email' autoComplete='off' className='w-100' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='form_group w-100'>
          <input type='password' placeholder='Your Password' autoComplete='off' className='w-100' onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button className='btn-primary w-100'>Register</button>
      </form>
      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}
