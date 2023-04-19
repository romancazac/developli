import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from '../ui/Select'
import { setOpenFilter } from "../../redux/slices/filterSlice";
export const SearchBar = ({children}) => {
   const { isMob } = useSelector(state => state.filter);

   const dispatch = useDispatch() 
   const countries = [
      {
         id: 1,
         name: 'Afghanistan'
      },
      {
         id: 2,
         name: 'Albania'
      },
      {
         id: 3,
         name: 'Algeria'
      }, {
         id: 4,
         name: 'Andorra'
      }, {
         id: 5,
         name: 'Moldova'
      }
   ]
   return (
      <div className='mb-[48px]'>
         <div className="container">
            <div className="flex items-center bg-white rounded-[16px] shadow-bar text-gray py-[6px] pr-[6px]">
               <div className="flex flex-auto items-center pl-[25px] gap-[12px] border-r md:border-none">
                  <label htmlFor='search' className='icon-search text-[24px] text-green ' />
                  <input className='w-[100%] h-[36px] outline-none' type="text" id='search' placeholder='Product Designer' />
               </div>
               <div className="flex flex-auto items-center pl-[16px]  max-w-[544px]">
                  {
                     isMob ?
                        <button onClick={() => dispatch(setOpenFilter(true))} className= 'rounded-[12px] text-gray ml-auto pr-6'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                           </svg>

                        </button>
                        :
                        <>
                           <label htmlFor='select' className='icon-location2 text-[24px] text-green ' />
                           <Select data={countries} />
                           <button className='bg-green h-[56px] rounded-[12px] text-white px-[55px] ml-[40px]'>Search</button>
                        </>

                  }

               </div>
            </div>
         </div>
      </div>
   )
}
