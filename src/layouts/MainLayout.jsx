import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const MainLayout = () => {
   return (
      <>
         <Header />
         <main className='flex-auto'>
            <Outlet />
         </main>
         <Footer />
      </>
   )
}
