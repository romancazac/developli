import { Button } from '@material-tailwind/react'
import React from 'react'
import Select from '../ui/Select'

export const TopCandidats = () => {
  const dataSort = [
    {
      id: 1,
      name: 'Most relevant',

    },
    {
      id: 2,
      name: 'Newest'

    },
    {
      id: 3,
      name: 'Client rating'

    },
  ]
  return (
    <div className=' mb-9'>
      <div className="flex justify-between mb-7">
        <div className="mr-[15px]">
          <h1 className="text-black text-2xl font-bold mb-2">Recomendation</h1>
          <p className="text-gray ">38 product designer Jobs in United States</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className='whitespace-nowrap text-gray '>sort by: </span>
          <Select data={dataSort} className={'bg-white w-[144px] rounded-[16px]'} />
        </div>
      </div>
      <div className="flex gap-[10px]">

        <Button variant="text" className="flex items-center gap-2 border rounded-[16px] px-[10px] py-[5px] normal-case">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
          0-2 years
        </Button>
        <Button variant="text" className="flex items-center gap-2 border rounded-[16px] px-[10px] py-[5px] normal-case">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
          0-2 years
        </Button>
        <Button variant="text" className="flex items-center gap-2 border rounded-[16px] px-[10px] py-[5px] normal-case">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
          0-2 years
        </Button>
      </div>
    </div>
  )
}
