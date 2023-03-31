import React from 'react'
import { Button } from '../ui/Button'
import bann from '../../assets/img/b/b.png'
export const Banner = () => {
   return (
      <div className='mb-[120px]'>

         <div className="container">
            <div className="flex items-center justify-between bg-[#B6DAFF] rounded-[50px] px-[100px]  md:block md:px-[30px]">
               <div className="flex-1 py-[15px]">
                  <h4 className="text-[#2D2D2D]  text-5xl  font-bold max-w-[380px] mb-[70px]">Hire your
                     dream team today</h4>

                  <Button className={'bg-textColor text-white'}>Get started <span className='icon-arrow-right2 align-middle'></span></Button>
               </div>
               <div className=" relative flex-1 _ibg pb-[49%]">
                  <img src={bann} alt="bann" />
               </div>
            </div>
         </div>
      </div>
   )
}
