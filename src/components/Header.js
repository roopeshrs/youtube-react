import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='bg-purple-800 h-[10vh] flex items-center'>
        <img className='h-12 pl-3' alt='logo' src={LOGO}/>
    </div>
  )
}

export default Header