import React from "react";
import {
   Dialog,
   DialogBody,
   DialogFooter,
   Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function PopUp({ handleOpen, open, avatar, name, author, country,types,level,experience,requirements,text,salary }) {


   return (
      <React.Fragment>

         <Dialog size="lg" open={open} handler={handleOpen} className="max-w-[715px!important] min-w-[auto] p-5">
            <div className="flex justify-between items-center mb-6">
               <img src={avatar} alt={name} />
               <div className="flex items-center gap-4 ">
                  <button onClick={handleOpen} className='w-[42px] h-[42px] flex justify-center items-center border border-[#F3F3F3] rounded-full text-2xl '>
                     <XMarkIcon strokeWidth={2} className="h-5 w-5 text-[#252A3F]" />
                  </button>
               </div>
            </div>

            <DialogBody className="overflow-y-auto p-0">
               <div className="flex items-center gap-5 mb-[15px]">
                  <span className='relative text-[#1F8FFF]  flex items-center modal__after'>{author}</span>
                  <span className='relative gap-[8px] flex items-center modal__after'>
                     <span className='icon-location2'></span>
                     {country}
                  </span>
                  <span className='gap-[8px] flex items-center '>
                     Posted 16 hours ago
                  </span>
               </div>
               <div className="flex px-5 py-6 border border-[#F3F3F3] rounded-2xl gap-5 mb-10">
                  <div className="relative w-1/4 after__line">
                     <span className="block mb-[5px]">Experience</span>
                     <span className="flex items-center gap-2  text-sm font-semibold text-[#1B2124]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        {experience}
                     </span>

                  </div>
                  <div className="relative w-1/4 after__line">
                     <span className="block mb-[5px]">Work Level</span>
                     <span className="flex items-center gap-2  text-sm font-semibold text-[#1B2124]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        {level}
                     </span>

                  </div>
                  <div className="relative w-1/4 after__line">
                     <span className="block mb-[5px]">Employee Type</span>
                     <span className="flex items-center gap-2  text-sm font-semibold text-[#1B2124]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        {types?.[0]}
                     </span>

                  </div>
                  <div className="relative w-1/4 ">
                     <span className="block mb-[5px]">Offer Salary</span>
                     <span className="flex items-center gap-2  text-sm font-semibold text-[#1B2124]">
                        <span className='icon-coin-dollar text-[18px]'></span>
                        ${salary} / Month
                     </span>

                  </div>
               </div>
               <div className="mb-12">
                  <h5 className="text-[#1B2124] text-lg font-bold mb-4 ">Job Description</h5>
                  <p className="">{text}</p>
               </div>
               <div className="mb-10">
                  <h5 className="text-[#1B2124] text-lg font-bold mb-4 ">Requirements</h5>
                  <ul>
                     {requirements?.map((r,i) =>
                        <li key={i} className="relative before__circle mb-3">{r}</li>
                     )}
                  </ul>
               </div>

            </DialogBody>
            <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
               <Typography className="font-semibold text-[#1B2124]">
                  Are you interested in this Job?
               </Typography>
               <div className="flex gap-4">
                  <button className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75 text-base'><span className='icon-file-text2'></span> Apply Now</button>
                  <button onClick={handleOpen} className='bg-[#F3F3F3] text-gray px-6 py-3 font-semibold rounded-2xl hover:scale-105 ease-in-out duration-75 '>Detail Information</button>
               </div>
            </DialogFooter>
         </Dialog>
      </React.Fragment>
   );
}