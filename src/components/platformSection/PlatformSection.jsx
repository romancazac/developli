import React from 'react'
import iconPlatform from '../../assets/img/platform/icon.svg'
import screen from '../../assets/img/platform/screen.png'
import { Button } from '../ui/Button'
export const PlatformSection = () => {
  return (
    <section className='relative  overflow-hidden mb-[70px]' >
      <div className="container">
        <div className=" bg-[#B1DFC9] bg-platform bg-[80%] bg-no-repeat bg-contain rounded-[50px] py-[88px] px-[48px] lg:py-[30px] lg">
          <div className="max-w-[40%] lg:max-w-[100%]">
            <div className="flex items-center justify-center w-[100px] h-[100px] rounded-[30px] bg-textColor mb-24 lg:mb-[10px]"><img className='w-[50px] h-[50px] ' src={iconPlatform} alt="icon" /></div>

            <h4 className=" text-3xl font-semibold text-titlesColor mb-[36px] lg:mb-[10px]">Powered by Developli platform</h4>
            <p className='mb-[90px] lg:mb-[15px]'>We are offering an alternative route towards the traditional hiring process. What do we want in return? Sign up and leave the rest to us.</p>
            <Button className={'bg-textColor text-white'}>
              Get started
            </Button>
          </div>
        </div>


      </div>

      <div className="absolute top-[50%] translate-y-[-50%] right-[-10%] bg-no-repeat  pb-[33%] w-[70%]  _ibg  md:hidden">
        <img className='' src={screen} alt="screen" />
      </div>
    </section>
  )
}
