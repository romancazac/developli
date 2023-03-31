import React from 'react'
import { Title } from '../Title/Title'

export const OpportuniSection = () => {
   return (
      <section className='mb-[120px] lg:mb-[50px]'>
         <div className="container">
            <div className="max-w-[650px] mb-20 text-center m-auto">

               <Title className={' text-[44px]'}>
                  A world of  <span className='text-green'>
                     opportunities
                  </span>

               </Title>
               <p className='max-w-[450px] m-auto px-3'>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies</p>
            </div>
            <div className="flex lg:flex-col gap-5 ">
               <div className="flex-1 even:mt-[72px] lg:mt-[20px!important]">
                  <div className='p-[25px] rounded-3xl shadow bg-white hover:scale-105 ease-in duration-300 '>
                     <span className='flex justify-center items-center w-[61px] h-[61px] bg-[#FEE5A4] rounded-[15px]  mb-[50px] text-[24px] text-[#E1A814]'>
                        <span className='icon-analist'></span>
                     </span>

                     <h4 className=' text-[#E1A814] font-bold mb-6 text-[24px]'>Detailed analytics</h4>
                     <p className=' opacity-80'>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies

                     </p>

                  </div>

               </div>
               <div className="flex-1  even:mt-[72px] lg:mt-[20px!important]">
                  <div className='p-[25px] rounded-3xl shadow bg-white hover:scale-105 ease-in duration-300 '>
                     <span className='flex justify-center items-center w-[61px] h-[61px] bg-[#1F8FFF] rounded-[15px]  mb-[50px] text-[20px] text-[#BBDCFD]'>
                        <span className='icon-cam'></span>
                     </span>

                     <h4 className=' text-[#1F8FFF] font-bold mb-6 text-[24px]'>Zoom integration</h4>
                     <p className=' opacity-80'>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies

                     </p>

                  </div>

               </div>
               <div className="flex-1  even:mt-[72px] lg:mt-[20px!important]">
                  <div className='p-[25px] rounded-3xl shadow bg-white hover:scale-105 ease-in duration-300 '>
                     <span className='flex justify-center items-center w-[61px] h-[61px] bg-[#ACDBC4] rounded-[15px]  mb-[50px] text-[24px] text-[#478F6C]'>
                        <span className='icon-brain'></span>
                     </span>

                     <h4 className=' text-[#478F6C] font-bold mb-6 text-[24px]'>Smart testing</h4>
                     <p className=' opacity-80'>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies

                     </p>

                  </div>

               </div>
               <div className="flex-1  even:mt-[72px] lg:mt-[20px!important]">
                  <div className='p-[25px] rounded-3xl shadow bg-white hover:scale-105 ease-in duration-300 '>
                     <span className='flex justify-center items-center w-[61px] h-[61px] bg-[#EAEDB6] rounded-[15px]  mb-[50px] text-[24px] text-[#99A129]'>
                        <span className='icon-rate'></span>
                     </span>

                     <h4 className=' text-[#99A129] font-bold mb-6 text-[24px]'>User Rating</h4>
                     <p className=' opacity-80'>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies

                     </p>

                  </div>

               </div>
            </div>
         </div>
      </section>
   )
}
