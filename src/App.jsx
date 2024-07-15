import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header, LoaderComponent, Container } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main className='bg-cyan-50'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (

   <Container>
      <div className="p-2 w-full">
        <h1 className="text-2xl text-center font-bold hover:text-gray-500">
          Loading...
        </h1>
        <div className="w-32 my-6 mx-auto">
          <LoaderComponent />
        </div>
      </div>
    </Container>

  )
}

export default App
