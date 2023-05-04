import React from 'react'

export const SectionContacts = ({children, title,descr}) => {
   return (
      <section className="mt-14">
         <div className="container">
            <div className="max-w-[600px] text-center mx-auto mb-[60px]">
               <h1 className="text-blackColor text-[44px] font-semibold mb-[30px] leading-10">{title}</h1>
               <p className='text-gray text-lg'>{descr }</p>
            </div>
           {children}
         </div>
      </section>
   )
}
