import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobs } from './redux/slices/jobsSlice'
import { transformArr } from "./utils/transformArr"
import { fetchArticles } from './redux/slices/articlesSlice';
import { fetchAuthMe } from "./redux/slices/authSlice"

import { routes } from "./routes"

function App() {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { experience, category, employment, salary, location, sort } = useSelector(state => state.filter);
  const { jobSearch } = useSelector(state => state.jobs)
  const { paginationPage } = useSelector(state => state.jobs);

  // filters query params
  const exp = experience.map(item => `&experience=${item}`)
  const cat = category.map(item => `category=${item}`)
  const empl = employment.map(item => `&q=${item}`)
  const sal = salary.map(item => `&salary=${item}`)
  const loc = location.map(item => `&country=${item}`)
  // sorts
  const sortFinal = sort.id === 1 ? `&_sort=date` : '' || sort.id === 2 ? `&_sort=date&_order=desc` : '' || sort.id === 3 ? `&_sort=rating&_order=desc` : '';

  //search jobs 
  const search = jobSearch.name ? `&country=${jobSearch.country}&q=${jobSearch.name} ` : ''


  useEffect(() => {
    dispatch(fetchJobs({
      filterExp: transformArr(exp),
      filterCategory: transformArr(cat),
      filterEmployment: transformArr(empl),
      filterSalary: transformArr(sal),
      filterLocation: transformArr(loc),
      sortFinal,
      paginationPage,
      search
    }));
  }, [experience, category, employment, salary, location, sort, paginationPage, jobSearch])
  
  useEffect(() => {
    dispatch(fetchArticles())
  }, [])
  
  // verificăm dacă utilizatorul este autentificat pe baza token-ului din localStorage
  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem('token');
      if (token) {
        dispatch(fetchAuthMe(token))

      }
    }
  }, [dispatch, user]);
  return (
    <div className="App h-[100%] flex flex-col">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
