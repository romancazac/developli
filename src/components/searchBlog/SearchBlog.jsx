import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from '../ui/Select'
import { setOpenFilter } from "../../redux/slices/filterSlice";
export const SearchBlog = () => {

   return (

      <div className="flex items-center max-w-[820px] w-full  bg-white rounded-[16px] shadow-bar text-gray py-[6px] pr-[6px] mb-5">
         <div className="flex flex-auto items-center pl-[25px] gap-[12px] ">
            <label htmlFor='search' className='icon-search text-[24px] text-green ' />
            <input className='w-[100%] h-[36px] outline-none' type="text" id='search' placeholder='Product Designer' />
         </div>

         <button className='bg-green h-[56px] rounded-[12px] text-white px-[55px] ml-[40px]'>Search</button>


      </div>

   )
}
