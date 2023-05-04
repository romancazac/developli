import React from 'react'
import {  Field, ErrorMessage } from 'formik';

export const InputForm = ({name,placeholder,label }) => {
   return (
      <div className='mb-5 '>
         <label className='text-blackColor font-bold mb-1 inline-block text-sm'>{label}<span className='text-red-900 mx-1'>*</span>
            <ErrorMessage name={name} component="span" className='text-red-900 text-xs' />
         </label>
         <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
            <Field className='bg-transparent text-gray w-full outline-0' type="text" name={name} placeholder={placeholder} />
         </div>

      </div>
   )
}
