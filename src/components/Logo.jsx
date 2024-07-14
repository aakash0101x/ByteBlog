import React from 'react'
import logo from ".../logo.png"
function Logo({width = '50px',...prop}) {
  return (
    <img src={logo} {...prop} width={50} className='rounded-xl' alt="" />
  )
}

export default Logo
