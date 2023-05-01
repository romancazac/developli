import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchRegistration, setRegistration } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
export const RegistrationForm = ({ handleOpen }) => {
   const dispatch = useDispatch();
   const { error } = useSelector(state => state.auth)
   
   const RegisterSchema = Yup.object().shape({
      username:Yup.string().min('3', 'Min 3 caracter').required('Required'),
      email:Yup.string().email('Invalid email').required('Required'),
      phone:Yup.number().min('9', 'Min 9 caracter').required('Required'),
      password:Yup.string().min('9', 'Min 9 caracter').required('Required').matches( )
   });


   return (
      <Formik
         initialValues={{
            email:'',
          password:'',
          phone:'',
          username:''
         }}
         validationSchema={RegisterSchema}
         onSubmit={(values) => { dispatch(fetchRegistration(values)) }}
      >

         <Form>
            <div className='mb-5 '>
               <label className='text-blackColor font-bold mb-1 block text-sm'>User Name</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>

                  <Field className='bg-transparent text-gray w-full outline-0' type="text" name="username" placeholder='Enter your name' />

               </div>
               <ErrorMessage name="username" />
            </div>
            <div className='mb-5 '>
               <label className='text-blackColor font-bold mb-1 block text-sm'>Email Address</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <Field className='bg-transparent text-gray w-full outline-0' type="text" name="email" placeholder='Enter your email' />

               </div>
               <ErrorMessage name="email" />
            </div>
            <div className='mb-5 '>
               <label className='text-blackColor font-bold mb-1 block text-sm'>Phone number</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>

                  <Field className='bg-transparent text-gray w-full outline-0' type="text" name="phone" placeholder='Enter your phone' />

               </div>
               <ErrorMessage name="phone" />
            </div>
            <div className='mb-5'>
               <label className='text-blackColor font-bold mb-1 block text-sm'>Password</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>


                  <Field className='bg-transparent text-gray w-full outline-0' type="password" name="password" placeholder='Enter your password' />

               </div>
               <ErrorMessage name="password" />
            </div>
            {error && <span className='text-center block mb-1'>No user or incorect password/email</span>}
            <div className="flex gap-4">

               <button onClick={() => dispatch(setRegistration(false) )} className='bg-[#F3F3F3] text-gray px-6 py-3 font-semibold rounded-2xl hover:scale-105 ease-in-out duration-75 '>Cancel</button>
               <button type='submit' className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75 text-base'>Registration</button>

            </div>
         </Form>
      </Formik>


   )
}
