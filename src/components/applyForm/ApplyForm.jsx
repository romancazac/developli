import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch} from 'react-redux';
import { useAppServices } from '../../services/apply';

export const ApplyForm = ({ title, applyId }) => {
   const dispatch = useDispatch();
   const {postApply} = useAppServices()   

   const ApplySchema = Yup.object().shape({
      username: Yup.string().min('3', 'Min 3 caracter').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.number().min('9', 'Min 9 caracter').required('Required'),
      
   });
   const handleSend = (values) => {
      const formData = new FormData();
      formData.append("file", values.file); 
      // console.log(JSON.stringify(values, null, 2))
      postApply(values)
   }

   return (
      <Formik
         initialValues={{
            email: '',
            file: '',
            phone: '',
            username: '',
            title,
           applyId
         }}
         validationSchema={ApplySchema}
         onSubmit={handleSend }
      >

         <Form>
            <div className='mb-5 '>
               <label className='text-blackColor font-bold mb-1 block text-sm'>Name</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
                  <Field className='bg-transparent text-gray w-full outline-0' type="text" name="username" placeholder='Enter your name' />

               </div>
               <ErrorMessage name="username" />
            </div>
            <div className='mb-5 '>
               <label className='text-blackColor font-bold mb-1 block text-sm'>Email Address</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
          
                  <Field className='bg-transparent text-gray w-full outline-0' type="text" name="email" placeholder='Enter your email' />

               </div>
               <ErrorMessage name="email" />
            </div>
            <div className='mb-5 '>
               <label className='text-blackColor font-bold mb-1 block text-sm'>Phone number</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
                  <Field className='bg-transparent text-gray w-full outline-0' type="text" name="phone" placeholder='Enter your phone' />

               </div>
               <ErrorMessage name="phone" />
            </div>
            <div className='mb-5'>
               <label className='text-blackColor font-bold mb-1 block text-sm'>Upload CV</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl'>

                  <Field className='bg-transparent text-gray w-full outline-0' type="file" name="file" />

               </div>
            
            </div>
           
            <div className="flex gap-4">

               <button onClick={() => dispatch(setRegistration(false))} className='bg-[#F3F3F3] text-gray px-6 py-3 font-semibold rounded-2xl hover:scale-105 ease-in-out duration-75 '>Cancel</button>
               <button type='submit' className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75 text-base'>Apply</button>

            </div>
         </Form>
      </Formik>


   )
}
