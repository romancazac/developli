import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Checkbox, Typography } from "@material-tailwind/react";
import { InputForm } from '../ui/InputForm';
import SelectContacts from '../ui/SelectContacts';
import { useAppServices } from '../../services/contactsServices';

export const ContactsForm = () => {
  const { postMessage, succes } = useAppServices()

  const ContactsSchema = Yup.object().shape({
    name: Yup.string().min('3', 'Min 3 caracter').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    firstname: Yup.string().required('Required'),
    company: Yup.string().required('Required'),
    checkbox: Yup.boolean().oneOf([true], 'You agree terms....?'),
    companySize: Yup.string().required('Required'),
    salesSize: Yup.string().required('Required'),

  });
  const sizeData = [{ id: 1, name: "1" }, { id: 2, name: "2" }, { id: 3, name: "3" }, { id: 4, name: "4" }, { id: 5, name: "5" }, { id: 6, name: "7" }, { id: 8, name: "8" }, { id: 9, name: "9" }]
  const salesData = [{ id: 1, name: "1" }, { id: 2, name: "2" }, { id: 3, name: "3" }, { id: 4, name: "4" }, { id: 5, name: "5" }, { id: 6, name: "7" }, { id: 8, name: "8" }, { id: 9, name: "9" }]
  const handleSend = (values,actions) => {
    postMessage(values);
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{
        name: '',
        firstname: '',
        email: '',
        company: '',
        checkbox: false,
        companySize: '',
        salesSize: '',

      }}
      validationSchema={ContactsSchema}
      onSubmit={handleSend}
    >

      {({ setFieldValue }) => (

        <Form className='max-w-[946px] mx-auto bg-white p-8 rounded-2xl'>


          <div className="flex gap-5 mb-5 md:flex-col">
            <div className="flex-1">
              <InputForm name='name' placeholder='Enter your name' label='Your Name' />
              <InputForm name='firstname' placeholder='Enter your first name' label='First Name' />
              <SelectContacts name='salesSize' setFieldValue={setFieldValue} data={salesData} />
              <ErrorMessage name='salesSize' component="span" className='text-red-900 text-xs' />
            </div>
            <div className="flex-1">
              <InputForm name='email' placeholder='Enter your name' label='Email' />
              <InputForm name='company' placeholder='Enter your company name' label='Company Name' />
              <SelectContacts name='companySize' setFieldValue={setFieldValue} data={sizeData} />
              <ErrorMessage name='companySize' component="span" className='text-red-900 text-xs' />
            </div>
          </div>
          <div className='mb-5 '>
            <label className='text-blackColor font-bold mb-1 inline-block text-sm'>Anything Else You’d Like Us To Know? </label>
            <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
              <Field className='bg-transparent text-gray w-full outline-0 min-h-[180px]' as='textarea' type="text" name='message' placeholder='Type anything' />
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
