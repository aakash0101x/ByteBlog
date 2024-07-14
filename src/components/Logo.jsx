import React from 'react'

function Logo({width = '50px',...prop}) {
  return (
    <img src=".../logo.png" {...prop} width={50} className='rounded-xl' alt="" />
  )
}

export default Logo
