import React, { createContext, useState } from 'react'

export const UIContext = createContext()

export default function UIProvider({ children }) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' })
  let timeOut
  const openSidebarCart = () => setSidebarIsOpen(true)
  const closeidebarCart = () => setSidebarIsOpen(false)

  const handleNav = () => setNavIsOpen(!navIsOpen)
  const closeNav = () => setNavIsOpen(false)

  const showAlert = ({ msg, type = 'success' }) => {
    if (timeOut) clearTimeout(timeOut)
    setAlert({ show: true, msg, type })
    closeAlert()
  }
  const closeAlert = () => {
    timeOut = setTimeout(() => {
      setAlert((prev) => {
        return { ...prev, show: false }
      })
    }, 3000)
  }

  return <UIContext.Provider value={{ alert, showAlert, closeAlert, closeidebarCart, openSidebarCart, sidebarIsOpen, handleNav, closeNav, navIsOpen }}>{children}</UIContext.Provider>
}
