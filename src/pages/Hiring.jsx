import React, { useEffect } from 'react'
import { Aside } from '../components/aside/Aside'
import { CartCandidat } from '../components/cartCanditat/CartCandidat'
import { SearchBar } from '../components/searchBar/SearchBar'
import { TopCandidats } from '../components/topCandidats/TopCandidats'


import { useSelector } from 'react-redux'


export const Hiring = () => {
  const {jobsData} = useSelector(state => state.jobs)

  return (
    <>
      <SearchBar />
      <div className="container">
        <div className="flex gap-[20px] ">
          <Aside />
          <div className="flex-auto">
            <TopCandidats />
            <div className='flex flex-wrap gap-5 mb-5'>
              {
                jobsData.map((item) =>
                  <CartCandidat classN='flex-[0_1_calc(50%-20px)] mb-[0] xl:flex-auto  ' {...item} key={item.id} />
                )
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
