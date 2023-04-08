import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { useAppServices } from '../../services/jobServices';
import PopUp from '../popUp/PopUp'

export const CartCandidat = ({id, name, avatar, text, author, salary, country, types }) => {
   const {getJob} = useAppServices()
   const [open, setOpen] = useState(false);
   const [job, setJob] = useState({})
   const handleOpen = (idn) => {
      if(idn){
         getJob(idn).then((data) => setJob(data))
      }
  
      setOpen((cur) => !cur)
   
   };

   return (
      <div className='bg-[rgba(255,255,255,0.8)] rounded-[16px] shadow-bar p-6 text-gray mb-9'>
         <div className="flex justify-between items-center mb-6">
            <img src={avatar} alt={name} />
            <div className="flex items-center gap-4 ">
               <button className='w-[42px] h-[42px] flex justify-center items-center border border-[#F3F3F3] rounded-full text-2xl icon-heart'>
               </button>
               <button className='w-[42px] h-[42px] flex justify-center items-center border border-[#F3F3F3] rounded-full text-2xl '>
                  <span>...</span>
               </button>
            </div>
         </div>
         <h4 className="text-[#1B2124] text-[18px] font-bold mb-4">{name}</h4>
         <div className="flex items-center gap-5 mb-[15px]">
            <span className='text-[#1F8FFF] font-semibold'>{author}</span>
            <span className='gap-[8px] flex items-center font-semibold'>
               <span className='icon-location2'></span>
               {country}
            </span>
            <span className='gap-[8px] flex items-center font-semibold'>
               <span className='icon-coin-dollar'></span>
               $ {salary} /Month
            </span>
         </div>
         <p className='mb-5'>{text.slice(0, 150)}...</p>

         <div className="flex flex-wrap gap-3 mb-[30px]">
            {
               types.split(',').map((type, i) =>
                  <span key={i} className='bg-[#F9F9F9] px-[14px] py-2 font-medium rounded-xl hover:text-green'>{type}</span>
               )

            }

         </div>
         <div className="flex gap-4">
            <button className='bg-green text-white px-8 py-4 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75'><span className='icon-file-text2'></span> Apply Now</button>
            <button onClick={ () =>  handleOpen(id)} className='bg-[#F3F3F3] text-gray px-8 py-4 font-semibold rounded-2xl hover:scale-105 ease-in-out duration-75'>Detail Information</button>
         </div>

         <PopUp {...job} handleOpen={handleOpen} open={open}/>
            
         
       
      </div>
   )
}
