import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Checkbox, Typography } from "@material-tailwind/react";
import { InputForm } from '../ui/InputForm';
import SelectContacts from '../ui/SelectContacts';
import { useAppServices } from '../../services/jobServices';
import { useSelector } from 'react-redux';

export const PostForm = () => {
  const {postJob ,succes} = useAppServices()
   const { user } = useSelector(state => state.auth);

   const currentDate = new Date();
   const dd = currentDate.getDate();
   const year = currentDate.getFullYear();
   const month = currentDate.toLocaleString('default', { month: 'long' }); 
   const date = `${dd} ${month} ${year}`;




   const PostSchema = Yup.object().shape({
      author: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
      checkbox: Yup.boolean().oneOf([true], 'You agree terms....?'),


   });
   const experienceData = [
      { id: 1, name: "0-2 years" },
      { id: 2, name: "3-5 years" },
      { id: 3, name: "6-9 years" },
      { id: 4, name: "10 years" }
   ]
   const countryData = [
      { id: 1, name: "Moldova" },
      { id: 2, name: "United States" },
      { id: 3, name: "Germany" },
      { id: 4, name: "Australia" }
   ]
   const employmentData = [
      { id: 1, name: "Fulltime" },
      { id: 2, name: "Part-Time" },
      { id: 3, name: "Remote" },
      { id: 4, name: "Internship/Trainee" },
      { id: 5, name: "Hourly" },
   ]
   const categoryData = [
      { id: 1, name: "Develope" },
      { id: 2, name: "Design" },
      { id: 3, name: "SMM Content" },
      { id: 4, name: "Marketing" },
      { id: 5, name: "Hourly" },
   ]
   const salaryData = [
      { id: 1, name: "2000" },
      { id: 2, name: "3000" },
      { id: 3, name: "4000" },
      { id: 4, name: "7000" },
      { id: 5, name: "8000" }
   ]
   const handleSend = (values, actions) => {
      // const formData = new FormData();
      // formData.append("avatar", values.avatar);
      postJob(values);
      actions.resetForm()

   }


   return (
      <Formik
         initialValues={{
            author: user?.username,
            name: '',
            salary: '',
            avatar: '/src/assets/img/cadidats/01.png',
            experience: '',
            category: '',
            types: '',
            text: '',
            checkbox: false,
            rating: '0',
            date: date
         }}
         validationSchema={PostSchema}
         onSubmit={handleSend}
      >

         {({ setFieldValue }) => (

            <Form className='max-w-[946px] mx-auto bg-white p-8 rounded-2xl'>


               <div className="flex gap-5 mb-5 md:flex-col">
                  <div className="flex-1">
                     <div className='mb-5'>
                        <label className='text-blackColor font-bold mb-1 block text-sm'>Upload CV</label>
                        <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl'>
                           <Field className='bg-transparent text-gray w-full outline-0' type="file" name />
                        </div>

                     </div>
                     <InputForm name='author' placeholder='Enter your name' label='Your Name' />
                     <InputForm name='name' placeholder='Tape name post' label='Name Post' />

                     <SelectContacts
                        name='experience'
                        setFieldValue={setFieldValue}
                        data={experienceData}
                        label='Select your experience'
                     />
                  </div>
                  <div className="flex-1">
                     <SelectContacts name='salary'
                        setFieldValue={setFieldValue}
                        data={salaryData}
                        label='Select salary'
                     />
                     <SelectContacts name='category'
                        setFieldValue={setFieldValue}
                        data={categoryData}
                        label='Select category'
                     />
                     <SelectContacts name='country'
                        setFieldValue={setFieldValue}
                        data={countryData}
                        label='Select country'
                     />
                     <SelectContacts name='types'
                        setFieldValue={setFieldValue}
                        data={employmentData}
                        label='Select employment'
                     />
                  </div>
               </div>
               <div className='mb-5 '>
                  <label className='text-blackColor font-bold mb-1 inline-block text-sm'>Text body </label>
                  <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
                     <Field className='bg-transparent text-gray w-full outline-0 min-h-[180px]' as='textarea' type="text" name='text' placeholder='Type anything' />
                  </div>

               </div>
               <div className="flex justify-between gap-4 md:flex-wrap" >

                  <div className='flex items-center'>
                     <Checkbox
                        id='checkbox'
                        className='hover:before:hidden checked:bg-green checked:border-0 border-grey'
                        onChange={(event) => {
                           setFieldValue('checkbox', event.target.checked);
                        }}
                        label={
                           (
                              <Typography
                                 variant="small"
                                 color="gray"
                                 className=" font-normal"
                              >
                                 I agree to Terms of Service and Privacy Policy.
                              </Typography>
                           )

                        }
                        containerProps={{ className: "-ml-2.5 " }}
                     />
                     <span className='text-red-900 mx-1'>*</span>
                     <ErrorMessage name='checkbox' component="span" className='text-red-900 text-xs' />
                  </div>
                  <button type='submit' className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75 text-base'>Contact Sales</button>

                  {succes && 'Message send'}


               </div>


            </Form>
         )}
      </Formik>


   )
}
