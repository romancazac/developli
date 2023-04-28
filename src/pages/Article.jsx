import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/breadcrumbs/Breadcrumbs'
import { RecentlyArticles } from '../components/recentlyArticles/RecentlyArticles';
import { useAppServices } from '../services/articleServices'

export const Article = () => {
   const { getArticle } = useAppServices();
   const { id } = useParams();
   const [article, setArticle] = useState({})
   useEffect(() => {
      getArticle(id).then((data) => setArticle(data))
      window.scrollTo(0, 0);
   }, [id])

   return (

      <>
         <div>
            <div className="container">
               <Breadcrumbs />
            </div>
         </div>

         <div className="mb-28">
            <div className="container">
               <div className="mb-14 max-w-[950px]  mx-auto text-center">
                  <h1 className='text-6xl text-blackColor mb-14'>{article.name}</h1>
                  <div className="flex gap-7 text-gray justify-center">
                     <span className='relative modal__after after:top-[50%] '>{article.date}</span>
                     <span>{article.category}</span>
                  </div>
               </div>
               <div className="text-gray ">
                  <div className="relative mb-12 _ibg _ibg-cover pb-[54%] rounded-2xl overflow-hidden">
                     <img src={article.img} alt={article.name} />
                  </div>
                  <p>
                     {article.text}
                  </p>
               </div>
            </div>
         </div>
          <RecentlyArticles/>  
      </>
   )
}
