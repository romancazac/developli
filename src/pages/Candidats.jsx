import React, { useEffect } from 'react'
import { Aside } from '../components/aside/Aside'
import { CartCandidat } from '../components/cartCanditat/CartCandidat'
import { SearchBar } from '../components/searchBar/SearchBar'
import { TopCandidats } from '../components/topCandidats/TopCandidats'


import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../components/pagination/Pagination'
import { setPaginationPage } from '../redux/slices/jobsSlice'


export const Candidats = () => {

  const dispatch = useDispatch();
  const { jobsData, totalCount } = useSelector(state => state.jobs);
  const onPaginationPage = (nr) => {
    dispatch(setPaginationPage(nr))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  },[jobsData])

  return (
    <>
      <SearchBar />
      <div className="container">
        <div className="flex gap-[20px] mb-3">
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
           
              <Pagination onPaginationPage={onPaginationPage} totalCount={totalCount} limitPage={5} />
           
            

          </div>
        </div>
      </div>
    </>
  )
}
