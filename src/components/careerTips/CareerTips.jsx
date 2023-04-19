import React from 'react'
import { Link } from 'react-router-dom';
import { Section } from '../section/Section'
import news1 from '../../assets/img/blog/b1.png'


export const CareerTips = () => {
   return (
      <Section>

         <div className="flex items-center justify-between mb-[50px]">

            <div>
               <h2 className="text-black text-2xl font-bold mb-2 sm:text-base">Career Tips</h2>
               <p className="text-gray ">Tips from succeed user from jobify</p>
            </div>

            <Link to='#' className='btn-block'>View All<span className='icon-arrow-right2 align-middle'></span></Link>
            
         </div>
         <div className="flex flex-col gap-8 ">
            <div className="flex items-center gap-6 md:items-start ">
               <img className='w-[295px] h-[240px] object-cover rounded-2xl md:w-[100px] md:h-[100px]' src={news1} alt="" />
               <div className='max-w-[800px]'>
                  <span className='mb-3 flex gap-4 '><span className='block relative modal__after after:top-[50%] after:right-[-10px] tez'>9 Sep 2022 </span>Career Tips</span>
                  <Link to='#' className='text-blackColor text-xl font-bold hover:text-green duration-300 ease-in mb-5 block md:text-sm md:mb-1'>How to Figure Out If a Potential Employer Offers Paid Leave</Link>
                  <p className='text-lg text-gray md:text-sm'>Whether you’re speaking with the recruiter or you're in the final stages of the interview process, you know you have the chops for the role.</p>
               </div>
               <Link to='#' className='ml-auto text-xl hover:text-green ease-in duration-300 md:hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>

               </Link>
            </div>
            <div className="flex items-center gap-6 md:items-start">
               <img className='w-[295px] h-[240px] object-cover rounded-2xl md:w-[100px] md:h-[100px]' src={news1} alt="" />
               <div className='max-w-[800px]'>
                  <span className='mb-3 flex gap-4 '><span className='block relative modal__after after:top-[50%] after:right-[-10px] tez'>9 Sep 2022 </span>Career Tips</span>
                  <Link to='#' className='text-blackColor text-xl font-bold hover:text-green duration-300 ease-in mb-5 block md:text-sm md:mb-1'>How to Figure Out If a Potential Employer Offers Paid Leave</Link>
                  <p className='text-lg text-gray md:text-sm'>Whether you’re speaking with the recruiter or you're in the final stages of the interview process, you know you have the chops for the role.</p>
               </div>
               <Link to='#' className='ml-auto text-xl hover:text-green ease-in duration-300 md:hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>

               </Link>
            </div>
            <div className="flex items-center gap-6 md:items-start">
               <img className='w-[295px] h-[240px] object-cover rounded-2xl md:w-[100px] md:h-[100px]' src={news1} alt="" />
               <div className='max-w-[800px]'>
                  <span className='mb-3 flex gap-4 '><span className='block relative modal__after after:top-[50%] after:right-[-10px] tez'>9 Sep 2022 </span>Career Tips</span>
                  <Link to='#' className='text-blackColor text-xl font-bold hover:text-green duration-300 ease-in mb-5 block md:text-sm md:mb-1'>How to Figure Out If a Potential Employer Offers Paid Leave</Link>
                  <p className='text-lg text-gray md:text-sm '>Whether you’re speaking with the recruiter or you're in the final stages of the interview process, you know you have the chops for the role.</p>
               </div>
               <Link to='#' className='ml-auto text-xl hover:text-green ease-in duration-300 md:hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>

               </Link>
            </div>

         </div>
      </Section>
   )
}
