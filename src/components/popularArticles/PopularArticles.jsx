import React from 'react'
import { Section } from '../section/Section'
import { Link } from 'react-router-dom';

export const PopularArticles = ({ data }) => {
   console.log(data)
   return (
      <Section name={'pop'}>
         <div className="flex items-center justify-between mb-[50px]">

            <div>
               <h2 className="text-black text-2xl font-bold mb-2 sm:text-base">Popular Articles</h2>
               <p className="text-gray ">We provide blog that help start your career on developli</p>
            </div>

            <Link to='/articles' className='btn-block'>View All<span className='icon-arrow-right2 align-middle'></span></Link>

         </div>
         <div className="flex gap-8 md:flex-wrap">
            {
               data?.slice(0, 2).map((i) =>
                  <div className="flex flex-col justify-end flex-[0_1_50%] relative  _ibg _ibg-cover bg-linearGradient  rounded-[16px] overflow-hidden pt-[327px]  md:flex-[0_1_100%] lg:pt-[150px] ">
                     <img className='object-cover z-[-1]' src={i.img} alt={i.name} />
                     <div className="flex flex-col p-[20px] text-white">
                        <span className='mb-3 flex gap-4 '><span className='block relative modal__after after:top-[50%] after:right-[-10px]'>{i.date}</span>{i.category}</span>
                        <Link to={`${i.id}`} className="text-2xl font-bold max-w-md ">{i.name}</Link>
                     </div>
                  </div>
               )
            }

         </div>
      </Section>
   )
}
