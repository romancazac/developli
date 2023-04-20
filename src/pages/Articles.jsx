
import React from 'react'
import { useSelector } from 'react-redux'
import { Breadcrumbs } from '../components/breadcrumbs/Breadcrumbs'
import { CartArticle } from '../components/cartArticle/CartArticle'

export const Articles = () => {
   const { articlesData } = useSelector(state => state.articles);
  
   return (
      <>
         <div className="container">
            <Breadcrumbs />
            <div className="">
               <div className="text-center mb-16">
                  <h1 className='font-bold text-2xl text-blackColor'>Recent Articles</h1>
                  <p className='text-gray font-semibold'>Newest update article from developli</p>
               </div>
               <div className="flex flex-wrap gap-[30px] ">
                  {
                     articlesData?.map((a) =>
                        <CartArticle key={a.id} {...a}  />
                     )
                  }
               </div>
            </div>

         </div>
      </>
   )
}
