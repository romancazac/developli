import React, { useEffect, useState } from 'react'
import { SearchBar } from '../components/searchBar/SearchBar';
import b1 from '../assets/img/blog/01.jpg'
import news1 from '../assets/img/blog/b1.png'
import news2 from '../assets/img/blog/b2.png'
import news3 from '../assets/img/blog/b3.png'

import { SearchBlog } from '../components/searchBlog/SearchBlog';
import { ArticlesBlog } from '../components/articlesBlog/ArticlesBlog';
import { PopularArticles } from '../components/popularArticles/PopularArticles';
import { RecentlyArticles } from '../components/recentlyArticles/RecentlyArticles';
import { CareerTips } from '../components/careerTips/careerTips';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../redux/slices/articlesSlice';


export const Blog = () => {
  const dispatch = useDispatch()
  const {articlesData} = useSelector(state => state.articles);
 
 
  return (
    <>
      <section className='mb-20 mt-20 md:mt-3'>
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <h1 className='text-blackColor font-bold text-[44px] mb-9'>Our Blog</h1>
            <SearchBlog/>
            <div className="flex flex-wrap gap-6">
              <span className='text-gray font-bold'>Suggested:</span>
              <a href='#' className='text-blueColor font-bold hover:text-green ease-in duration-300'>Career Tips</a>
              <a href='#' className='text-blueColor font-bold hover:text-green ease-in duration-300'>Interview</a>
              <a href='#' className='text-blueColor font-bold hover:text-green ease-in duration-300'>Work From Home</a>
              <a href='#' className='text-blueColor font-bold hover:text-green ease-in duration-300'>Success Story</a>

            </div>

          </div>

        </div>
      </section>
      <ArticlesBlog data={articlesData.slice(0, 4)}/>
      <PopularArticles data={articlesData.filter((obj) => obj.rating >= 5 )}/>
      <RecentlyArticles/>
      <CareerTips data={articlesData.filter((obj) => obj.category.toLowerCase() == 'career tips')}/>  
    </>

  )
}
