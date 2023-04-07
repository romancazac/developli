import { useEffect } from "react"
import { Home } from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { Candidats } from "./pages/Candidats"
import { Company } from "./pages/Company"
import { Blog } from "./pages/Blog"
import { useDispatch } from "react-redux"
import { fetchJobs } from './redux/slices/jobsSlice'


function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchJobs())
  }, [])


  return (
    <div className="App h-[100%] flex flex-col">

      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/candidats" element={<Candidats />} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />

        </Route >


      </Routes>

    </div>
  )
}

export default App
