import React, { useEffect } from 'react'
import { Aside } from '../components/aside/Aside'
import { CartCandidat } from '../components/cartCanditat/CartCandidat'
import { SearchBar } from '../components/searchBar/SearchBar'
import { TopCandidats } from '../components/topCandidats/TopCandidats'

import a1 from '../assets/img/cadidats/01.png';
import a2 from '../assets/img/cadidats/02.png';
import a3 from '../assets/img/cadidats/03.png';
import a4 from '../assets/img/cadidats/04.png';
import a5 from '../assets/img/cadidats/05.png';
import { useSelector } from 'react-redux'


export const Candidats = () => {
  const {jobsData} = useSelector(state => state.jobs)

  return (
    <>
      <SearchBar />
      <div className="container">
        <div className="flex gap-[20px]">
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
