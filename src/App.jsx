import { useEffect } from "react"
import { Home } from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { Candidats } from "./pages/Candidats"
import { Company } from "./pages/Company"
import { Blog } from "./pages/Blog"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobs } from './redux/slices/jobsSlice'
import { useState } from "react"
import { transformArr } from "./utils/transformArr"
import { Hiring } from "./pages/Hiring"


function App() {

  const dispatch = useDispatch();

  const { experience, category, employment, salary, location,sort } = useSelector(state => state.filter)

  // filters
  const exp = experience.map(item => `&experience=${item}`)
  const cat = category.map(item => `category=${item}`)
  const empl = employment.map(item => `&q=${item}`)
  const sal = salary.map(item => `&salary=${item}`)
  const loc = location.map(item => `&country=${item}`)
// sorts
  const sortFinal =  sort.id === 1 ? `&_sort=date` : '' || sort.id === 2 ? `&_sort=date&_order=desc` : '' || sort.id === 3 ? `&_sort=rating&_order=desc` : '';

  console.log(sortFinal)
  useEffect(() => {


    dispatch(fetchJobs({
      filterExp: transformArr(exp),
      filterCategory: transformArr(cat),
      filterEmployment: transformArr(empl),
      filterSalary: transformArr(sal),
      filterLocation: transformArr(loc),
      sortFinal
    }));
  }, [experience, category, employment, salary, location, sort])


  return (
    <div className="App h-[100%] flex flex-col">

      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/candidats" element={<Candidats />} />
          <Route path="/hiring" element={<Hiring/>} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />

        </Route >


      </Routes>

    </div>
  )
}

export default App
