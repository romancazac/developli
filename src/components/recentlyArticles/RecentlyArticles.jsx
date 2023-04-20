import React, { useEffect, useState } from 'react'
import { Section } from '../section/Section'
import news1 from '../../assets/img/blog/b1.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RecentlyArticles = () => {

   const { articlesData } = useSelector(state => state.articles)

   const sortedArticles = [...articlesData].sort((a, b) => new Date(b.date) - new Date(a.date));

   return (
      <Section>
         <div className="flex items-center justify-between mb-[50px]">

            <div>
               <h2 className="text-black text-2xl font-bold mb-2 sm:text-base">Recently Articles</h2>
               <p className="text-gray ">Newest update article from jobify</p>
            </div>

            <Link to='/blog/articles' className='btn-block'>View All<span className='icon-arrow-right2 align-middle'></span></Link>

         </div>
         <div className="flex gap-8 md:overflow-x-auto">
            {
               sortedArticles?.slice(0,3).map((a) =>
                  <div key={a.id} className="flex-1 md:flex-[0_0_200px]">
                     <div className="relative _ibg _ibg-cover pb-[78%] mb-6 rounded-2xl overflow-hidden">
                        <img src={a.img} alt={a.name} />
                     </div>
                     <span className='mb-3 flex gap-4 '><span className='block relative modal__after after:top-[50%] after:right-[-10px] tez'>{a.date} </span>{a.category}</span>
                     <Link to={`/blog/${a.id}`} className='text-blackColor text-xl font-bold hover:text-green duration-300 ease-in'>{a.name}</Link>
                  </div>
               )
            }

         </div>

      </Section>
   )
}
