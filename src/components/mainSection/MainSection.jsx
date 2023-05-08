import React from 'react'
import { Title } from '../Title/Title'
import { Button } from '../ui/Button'
import main from '../../assets/img/bg-main.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { boolean } from 'yup'
import { setOpenPop } from '../../redux/slices/authSlice'
export const MainSection = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);

  const onPost = () => {
    user ? navigate('post') : dispatch(setOpenPop(true))
   
  }
  return (
    <section className='flex items-center section-main lg:block'>
      <div className="max-w-[565px] flex-shrink-0 lg:text-center">
        <Title>
          Let’s <span className='text-green'>boost up</span>
          your hiring
          process
        </Title>
        <p>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies</p>
        <div className="flex gap-4 mt-9 sm:flex-col">          
          <Link to='hiring' className='rounded-xl py-3 px-4 bg-textColor hover:scale-105 ease-in duration-300bg-white text-white border '>Start hiring <span className='icon-arrow-right2 align-middle'></span></Link>
          <button onClick={onPost} className='rounded-xl py-3 px-4  hover:scale-105 ease-in duration-300 bg-white text-gray'>Post a job <span className='icon-arrow-right2 align-middle'></span></button>
        </div>
      </div>
      <div className="relative flex-auto _ibg pb-[50%] sm:mt-[40px]">
        <img src={main} alt="img" />
      </div>
    </section>
  )
}
