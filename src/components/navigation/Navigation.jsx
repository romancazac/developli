import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav >
         <ul className="flex gap-9 lg:flex-col lg:text-[20px] lg:mb-[20px] lg:border-b-2 lg:pb-[20px]">
            <li><NavLink to="/" className=' hover:text-green [&.active]:text-green'  href="#">Employers</NavLink></li>
            <li><NavLink to="/candidats" className='hover:text-green [&.active]:text-green' href="#">Candidates</NavLink></li>
            <li><NavLink to="/company" className='hover:text-green [&.active]:text-green' href="#">Company</NavLink></li>
            <li><NavLink to="/blog" className='hover:text-green [&.active]:text-green' href="#">Blog</NavLink></li>
         </ul>
    </nav>
  )
}
