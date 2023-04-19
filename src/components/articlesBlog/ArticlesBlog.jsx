import React from 'react'

import { Link } from 'react-router-dom';
import { Section } from '../section/Section'

export const ArticlesBlog = ({ data }) => {
   console.log()
   return (
      <Section>

         <div className="flex gap-8 xl:flex-wrap">
            <div className="flex flex-col justify-end flex-[0_1_60%] relative  _ibg _ibg-cover bg-linearGradient  rounded-[16px] overflow-hidden pt-10 xl:flex-[0_1_100%]">
               <img className='object-cover z-[-1]' src={data?.[0]?.img} alt={data?.[0]?.name} />
               <div className="flex flex-col p-[20px] text-white">
                  <span className='mb-3 flex gap-4 '><span className='block relative modal__after after:top-[50%] after:right-[-10px]'>{data?.[0]?.date} </span>{data?.[0]?.category} </span>
                  <Link to={`${data?.[0]?.id}`} className="text-2xl font-bold max-w-md ">{data?.[0]?.name}</Link>
               </div>
            </div>
            <div className="flex-[0_1_40%] relative flex flex-col gap-[30px] xl:flex-row xl:flex-[0_1_100%]  md:overflow-x-auto">

               {
                  data?.slice(1,4).map((i) =>
                     <div className="flex items-center gap-6 xl:flex-wrap md:flex-[0_0_200px]">
                        <img className='w-[190px] h-[176px] object-cover rounded-xl' src={i.img} alt={i.name} />
                        <div className="">
                           <span className='mb-3 flex gap-4 '><span className='block relative modal__after after:top-[50%] after:right-[-10px] tez'>{i.date}</span>{i.category}</span>
                           <Link to={`${i.id}`} className='text-blackColor text-xl font-bold hover:text-green duration-300 ease-in'>{i.name}</Link>
                        </div>
                     </div>
                  )
               }

            </div>
         </div>

      </Section>
   )
}
