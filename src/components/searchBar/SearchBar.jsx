import React from 'react'
import Select from '../ui/Select'

export const SearchBar = () => {
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
               <div className="flex flex-auto items-center pl-[25px] gap-[12px] border-r">
                  <label htmlFor='search' className='icon-search text-[24px] text-green ' />
                  <input className='w-[100%] h-[36px] outline-none' type="text" id='search' placeholder='Product Designer' />
               </div>
               <div className="flex flex-auto items-center pl-[16px]  max-w-[544px]">
                  <label htmlFor='select' className='icon-location2 text-[24px] text-green ' />
                  <Select data={countries}/>
                
                  <button className='bg-green h-[56px] rounded-[12px] text-white px-[55px] ml-[40px]'>Search</button>
               </div>
            </div>
         </div>
      </div>
   )
}
