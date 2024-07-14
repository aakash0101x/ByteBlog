import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'

//Can do optimization by integrating both map in one
function Header() {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()
  const innerWidth = window.innerWidth;

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Blogs",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Blog",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "Account",
      slug: "/manage-account",
      active: authStatus,
    }
  ]

  function closeSidebar() {
    document.getElementById('sidebar').style.width = "0px"
  }
  function openSidebar() {
    document.getElementById('sidebar').style.width = "200px"
  }

  return (
    <header className='py-2 shadow bg-teal-400 sticky w-full top-0 z-10'>
      <Container>
        <nav className='flex'>

          <div className='flex gap-1'>
            <button className='inline-bock bg-teal-200 px-4 py-2 duration-200  hover:bg-white rounded-xl sm:hidden' onClick={openSidebar}  >
              ☰
            </button>
            <div className='mr-4'>
              <Logo />
            </div>
          </div>


          <div id='sidebar' className='h-full w-0 fixed left-0 bg-teal-400 overflow-x-hidden duration-500'>

            <button className='text-5xl text-center' onClick={closeSidebar}>
              &times;
            </button>


            {
              navItems.map((item) =>
                item.active && item.name !== "Login" && item.name !== "Signup" ? (
                  <li className='list-none' key={item.name}>
                    <button
                      onClick={() => { navigate(item.slug); closeSidebar() }}
                      className=' bg-teal-200 px-4 py-2 duration-300 hover:bg-white rounded-full block w-40 mx-auto my-3'
                    >{item.name}</button>
                  </li>
                ) : null
              )
            }


          </div>

          <ul className='flex flex-wrap ml-auto gap-3 items-center'>

            {
              navItems.map((item) =>
                ((item.active) && (
                  innerWidth < 640 && (
                    item.name === "Login" || item.name === "Signup"
                  ) || innerWidth > 640
                )) ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-bock bg-teal-200 px-6 py-2 duration-200  hover:bg-white rounded-full '
                    >{item.name}</button>
                  </li>
                ) : null
              )
            }

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}

          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header
