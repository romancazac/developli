import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import LoginPopUp from '../../components/logInPopUp/LogInPopUp'
import { Navigation } from '../../components/navigation/Navigation'

import { setOpenPop } from '../../redux/slices/authSlice'
export const Header = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const [openMenu, setOpenMenu] = useState(false);

  const onMenu = () => {
    setOpenMenu(!openMenu)
  }
  useEffect(() => {
    setOpenMenu(false)
 },[history])
  return (
    <header >
      
      <div className="container ">
        <div className="flex items-center justify-between  py-6 font-semibold">
          <a href="/" className="block mr-[20px]"><img src={logo} alt="logo" /></a>
          <div className={`header__items ${openMenu ||  'lg:hidden'}`}>
            <Navigation  />
            <div className="lg:mb-[20px]">
              <button onClick={() => dispatch(setOpenPop(true))} className='flex  items-center font-semibold hover:text-green ease-in duration-75 '><span className='icon-user pr-2'></span>Login</button>
            </div>

            <div className="flex gap-2 lg:flex-col">
              <Link to='hiring' className='rounded-xl py-3 px-4  hover:scale-105 ease-in duration-300bg-white text-gray border lg:w-[200px]'>Start hiring</Link>
              <Link to='candidats' className='rounded-xl py-3 px-4  hover:scale-105 ease-in duration-300 bg-textColor text-white '>Find a job</Link>
            </div>
          </div>
          <button onClick={onMenu} className={`hidden lg:block relative w-[30px] h-[20px] z-50 group ${openMenu ? 'active ' : ''}`}>
            <span className='block absolute w-[100%] h-[1px] top-0 bg-green group-[.active]:rotate-[-45deg] group-[.active]:top-[50%] ease-in-out duration-75'></span>
            <span className='block absolute w-[100%] h-[1px] top-[50%] bg-green group-[.active]:hidden'></span>
            <span className='block absolute w-[100%] h-[1px] bottom-[0] bg-green group-[.active]:rotate-45 group-[.active]:top-[50%] ease-in-out duration-75'></span>
          </button>
        </div>
      </div>
      <LoginPopUp/>
    </header>
  )
}
