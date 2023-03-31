import React from 'react'
import { Title } from '../Title/Title'

export const StepsSection = () => {
   return (
      <section className='py-3 mb-[120px] lg:mb-10'>
         <div className="container">
            <div className="max-w-[650px] mb-20 text-center m-auto">
               <Title className={' text-[44px]'}>
                  With Developli, hiring is <span className='text-green'>
                     easy-peasy
                  </span>
                  , lemon squeezy
               </Title>
               <p className='max-w-[450px] m-auto px-3'>Our hiring process is so simple and easy to do, just follow the steps and you’re done!</p>
            </div>

            <div className="flex gap-5 lg:flex-wrap ">
               <div className="flex-1 ">
                  <div className='p-9 rounded-3xl shadow bg-white'>
                     <span className='flex justify-center items-center w-14 h-14 border rounded-full text-xl mb-40 lg:mb-3'>1</span>

                     <h4 className=' text-textColor font-bold mb-9 text-3xl'>Post your job</h4>
                     <p className=' opacity-80'>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies

                     </p>

                  </div>

               </div>
               <div className="flex-1 ">
                  <div className='p-9 rounded-3xl shadow bg-textColor mt-16 lg:mt-0 '>
                     <span className='flex justify-center items-center w-14 h-14  rounded-full text-xl mb-40 bg-yellowColor  lg:mb-3'>2</span>

                     <h4 className=' text-yellowColor text-3xl font-bold mb-9'>Manage applicants</h4>
                     <p className=' opacity-80 text-yellowColor'>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies

                     </p>

                  </div>

               </div>
               <div className="flex-1 ">
                  <div className='p-9 rounded-3xl shadow bg-white mt-32 lg:mt-0'>
                     <span className='flex justify-center items-center w-14 h-14 border rounded-full text-xl mb-40 lg:mb-3'>3</span>
                     <h4 className=' text-textColor text-3xl font-bold mb-9'>Easily find quality matches</h4>
                     <p className=' opacity-80'>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies

                     </p>
                  </div>


               </div>

            </div>
         </div>

      </section>
   )
}
