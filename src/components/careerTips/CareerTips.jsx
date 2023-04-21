import React from 'react'
import { Link } from 'react-router-dom';
import { Section } from '../section/Section'



export const CareerTips = ({ data,title,text,search }) => {
   const finalData = search ? data : data.slice(0, 3);
   
   return (
      <Section
         title={title}
         text={text}
      >

    
         <div className="flex flex-col gap-8 ">
            {
               finalData.map((i) =>
                  <div key={i.id} className="flex items-center gap-6 md:items-start ">
                     <img className='w-[295px] h-[240px] object-cover rounded-2xl md:w-[100px] md:h-[100px]' src={i.img} alt={i.name} />
                     <div className='max-w-[800px]'>
                        <span className='mb-3 flex gap-4 '><span className='block relative modal__after after:top-[50%] after:right-[-10px] tez'>{i.date}</span>{i.category}</span>
                        <Link to={`/blog/${i.id}`} className='text-blackColor text-xl font-bold hover:text-green duration-300 ease-in mb-5 block md:text-sm md:mb-1'>{i.name}</Link>
                        <p className='text-lg text-gray md:text-sm'>{i.text.slice(0, 150)}...</p>
                     </div>
                     <Link to={`/blog/${i.id}`} className='ml-auto text-xl hover:text-green ease-in duration-300 md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                     </Link>
                  </div>
               )
            }


         </div>
      </Section>
   )
}
