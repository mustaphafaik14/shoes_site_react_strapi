import React, { createContext, useState } from 'react'
import { getUserFromLocalStorage } from '../utils/helpers'

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUserFromLocalStorage())

  const userLogin = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }
  const userLogout = () => {
    setUser({ username: null, token: null })
    localStorage.removeItem('user')
  }

  return <UserContext.Provider value={{ user, userLogin, userLogout }}>{children}</UserContext.Provider>
}
