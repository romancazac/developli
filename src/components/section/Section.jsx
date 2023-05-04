import React from 'react'
import { Link } from 'react-router-dom'

export const Section = ({ children, title, text }) => {

   return (
      <section className='mb-[100px] md:mb-12'>
         <div className="container">
            {title &&
               <div className="flex items-center justify-between mb-[50px] gap-3">

                  <div>
                     <h2 className="text-black text-2xl font-bold mb-2 sm:text-base">{title}</h2>
                     <p className="text-gray ">{text}</p>
                  </div>

                  <Link to='/blog/articles' className='btn-block'>View All<span className='icon-arrow-right2 align-middle'></span></Link>

               </div>
            }

            {children}
         </div>
      </section>
   )
}
