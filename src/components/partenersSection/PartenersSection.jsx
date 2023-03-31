import React, { useRef } from 'react'
import { Slider } from '../slider/Slider'
import { Title } from '../Title/Title'


export const PartenersSection = () => {
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const dataSlide = [
      {
         logo: 'icon-01',
         text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
         author: 'Leila Khoury, CEO'
      },
      {
         logo: 'icon-02',
         text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
         author: 'Leila Khoury, CEO'
      },
      {
         logo: 'icon-03',
         text: 'We are nost efficient and reliable souce of hiring perocess and',
         author: 'Leila Khoury, CEO'
      },
      {
         logo: 'icon-04',
         text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
         author: 'Leila Khoury, CEO'
      },
      {
         logo: 'icon-07',
         text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
         author: 'Leila Khoury, CEO'
      },
      {
         logo: 'icon-06',
         text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
         author: 'Leila Khoury, CEO'
      },
   ]
   return (
      <section className='mb-[130px] '>
         <div className="container">
            <div className="flex justify-between items-center mb-[90px] lg:flex-col lg:mb-[40px]">
               <div className="max-w-[450px] lg:text-center">
                  <Title className={' text-[44px]'}>
                     Working with <span className="text-green">world class</span> partners
                  </Title>
               </div>
               <div className="max-w-[400px] flex items-end flex-col">
                  <p className="mb-[36px] lg:text-center">Our hiring process is so simple and easy to do, just follow the steps and you’re done!</p>

                  <div className="flex gap-[12px]">
                     <button ref={prevRef} className='flex items-center justify-center w-[44px] h-[44px] bg-white rounded-[12px] border' ><span className='icon-arrow-right2  rotate-180'></span></button>
                     <button ref={nextRef} className='flex items-center justify-center w-[44px] h-[44px] bg-white rounded-[12px] border'><span className='icon-arrow-right2'></span></button>
                  </div>

               </div>

            </div>

         </div>
         <Slider data={dataSlide} prevRef={prevRef} nextRef={nextRef} />

         <div className="container">
            <div className="flex flex-wrap justify-between  items-center gap-[15px] mt-[120px]">
               {
                  dataSlide.map((item,i) =>
                     <div key={i} className="relative hover:text-green ease-in duration-300"><span className={` text-[40px]  ${item.logo}`}></span></div>
                  )
               }


            </div>
         </div>
      </section>
   )
}
