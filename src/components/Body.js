import React from 'react'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='min-h-[80vh] py-4'>
        <Outlet />
    </div>
  )
}

export default Body