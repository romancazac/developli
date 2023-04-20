import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const CartArticle = ({img,name,id,date,category}) => {

   return (
      <div className="flex-[0_1_calc(33.3333%-30px)]">
         
         <div className="relative _ibg _ibg-cover pb-[78%] mb-6 rounded-2xl overflow-hidden">
            <img src={img} alt="" />
         </div>
         <span className='mb-3 flex gap-4 '><span className='block relative modal__after after:top-[50%] after:right-[-10px] tez'>{date} </span>{category}</span>
         <Link to={`/blog/${id}`} className='text-blackColor text-xl font-bold hover:text-green duration-300 ease-in'>{name}</Link>
      </div>
   )
}
