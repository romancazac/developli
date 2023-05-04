import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav >
         <ul className="flex gap-9 lg:flex-col lg:text-[20px] lg:mb-[20px] lg:border-b-2 lg:pb-[20px]">
            <li><NavLink to="/" className=' hover:text-green [&.active]:text-green'  >Employers</NavLink></li>
            <li><NavLink to="/candidats" className='hover:text-green [&.active]:text-green'>Candidates</NavLink></li>
            <li><NavLink to="/blog" className='hover:text-green [&.active]:text-green' >Blog</NavLink></li>
            <li><NavLink to="/contacts" className='hover:text-green [&.active]:text-green' >Contacts</NavLink></li>

      </ul>
    </nav>
  )
}
