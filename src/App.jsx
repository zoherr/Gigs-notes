import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./api/auth"
import {login, logout} from "./redux/features/authSlice"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Loading from "./components/Loading"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
 
     <Outlet />
    </>
  ) : (
    <>
    <Loading />
    </>
  )
}

export default App
