import React from 'react'

export const LogInForm = ({ handleOpen }) => {
   return (
      <>
         <div className='mb-5 '>
            <label className='text-blackColor font-bold mb-3 block'>Email Address</label>
            <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
               </svg>

               <input className='bg-transparent text-gray w-full outline-0' type="text" name="email" placeholder='Enter your email' />
            </div>

         </div>
         <div  className='mb-5'>
            <label className='text-blackColor font-bold mb-3 block'>Password</label>
            <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
               </svg>

               <input className='bg-transparent text-gray w-full outline-0' type="text" name="email" placeholder='Enter your password' />
            </div>

         </div>
         <div className="flex gap-4">

            <button onClick={handleOpen} className='bg-[#F3F3F3] text-gray px-6 py-3 font-semibold rounded-2xl hover:scale-105 ease-in-out duration-75 '>Cancel</button>
            <button className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75 text-base'>Login</button>

         </div>
      </>


   )
}
