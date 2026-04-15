import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-full h-25 md:h-20 flex justify-center bg-black '>
      <div className='container flex-col md:flex justify-between  gap-5 items-center md:flex-row-reverse p-10 text-center border-b-2 border-gray-800 '>

        <h1 className=' md:font-Boldonse text-2xl font-bold text-white'>KAREM MOHAMED</h1>
        <nav className='  flex justify-center gap-5 flex-row-reverse  '>
          <NavLink to="/" className='text-white font-bold text-lg hover:text-gray-500 transition duration-500'>اعمالي</NavLink>
          <NavLink to="/contactme" className='text-white font-bold text-lg hover:text-gray-500 transition duration-500'>تواصل</NavLink>
        </nav>
      </div>
    </div>
  )
}
