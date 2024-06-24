import React from 'react'
import './Logo.css'
import { FaBookOpenReader } from 'react-icons/fa6'

const Logo = () => {
  return (
    <div className='logo__container'>
        <FaBookOpenReader className='icon' />
        <h1 className='name'>Naveen<span className="color__primary">Jaiswal</span></h1>
    </div>
  )
}

export default Logo