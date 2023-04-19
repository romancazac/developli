import React from 'react'

export const Section = ({children}) => {

   return (
      <section className='mb-[100px] md:mb-12'>
         <div className="container">
            {children}
         </div>
      </section>
   )
}
