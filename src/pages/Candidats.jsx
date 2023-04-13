import React, { useEffect } from 'react'
import { Aside } from '../components/aside/Aside'
import { CartCandidat } from '../components/cartCanditat/CartCandidat'
import { SearchBar } from '../components/searchBar/SearchBar'
import { TopCandidats } from '../components/topCandidats/TopCandidats'


import { useSelector } from 'react-redux'


export const Candidats = () => {
  const {jobsData} = useSelector(state => state.jobs)

  return (
    <>
      <SearchBar />
      <div className="container">
        <div className="flex gap-[20px] ">
          <Aside />
          <div className="flex-auto">
            <TopCandidats />
            <div>
              {
                jobsData.map((item) =>
                  <CartCandidat {...item} key={item.id} />
                )
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
