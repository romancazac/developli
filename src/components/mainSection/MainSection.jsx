import React from 'react'
import { Title } from '../Title/Title'
import { Button } from '../ui/Button'
import main from '../../assets/img/bg-main.png'
import { Link } from 'react-router-dom'
export const MainSection = () => {
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
          <Link to='hiring' className='rounded-xl py-3 px-4 bg-textColor hover:scale-105 ease-in duration-300bg-white text-white border lg:w-[200px]'>Start hiring <span className='icon-arrow-right2 align-middle'></span></Link>
          <Link to='post' className='rounded-xl py-3 px-4  hover:scale-105 ease-in duration-300 bg-white text-gray'>Post a job <span className='icon-arrow-right2 align-middle'></span></Link>
        </div>
      </div>
      <div className="relative flex-auto _ibg pb-[50%] sm:mt-[40px]">
        <img src={main} alt="img" />
      </div>
    </section>
  )
}
