import React from 'react'
import { Banner } from '../components/banner/Banner'
import { MainSection } from '../components/mainSection/MainSection'
import { OpportuniSection } from '../components/opportuniSection/OpportuniSection'
import { PartenersSection } from '../components/partenersSection/PartenersSection'
import { PlatformSection } from '../components/platformSection/PlatformSection'
import { StepsSection } from '../components/stepsSection/StepsSection'

export const Home = () => {
  return (
    <>
      
      <MainSection />
      <StepsSection />
      <PlatformSection />
      <OpportuniSection />
      <PartenersSection />
      <Banner />

    </>
  )
}
