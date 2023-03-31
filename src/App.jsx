import { Banner } from "./components/banner/Banner"
import { Footer } from "./layouts/footer/Footer"
import { Header } from "./layouts/header/Header"
import { MainSection } from "./components/mainSection/MainSection"
import { OpportuniSection } from "./components/opportuniSection/OpportuniSection"
import { PartenersSection } from "./components/partenersSection/PartenersSection"
import { PlatformSection } from "./components/platformSection/PlatformSection"

import { StepsSection } from "./components/stepsSection/StepsSection"
import { Home } from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { Candidats } from "./pages/Candidats"
import { Company } from "./pages/Company"
import { Blog } from "./pages/Blog"


function App() {


  return (
    <div className="App h-[100%] flex flex-col">
      
      <Routes>
        <Route path="/" element={<MainLayout/>}>

          <Route path="/" element={<Home/>} />
          <Route path="/candidats" element={<Candidats/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="/blog" element={<Blog/>} />

        </Route >


      </Routes>
   
    </div>
  )
}

export default App
