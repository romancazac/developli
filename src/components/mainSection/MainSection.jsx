import React from 'react'
import { Title } from '../Title/Title'
import { Button } from '../ui/Button'
import main from '../../assets/img/bg-main.png'
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
          <Button className={'bg-textColor text-white'}>Start hiring <span className='icon-arrow-right2 align-middle'></span></Button>
          <Button className={'bg-white text-gray border '}>Start hiring <span className='icon-arrow-right2 align-middle'></span></Button>

        </div>
      </div>
      <div className="relative flex-auto _ibg pb-[50%] sm:mt-[40px]">
        <img src={main} alt="img" />
      </div>
    </section>
  )
}
