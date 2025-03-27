import HeroSections from '@/modules/home/sections/hero-section'
import OurRewardsSection from '@/modules/home/sections/our-rewards-section'
import Footer from '@/shared/ui/footer/page'
import Header from '@/shared/ui/header'
import Leaderboard from '@/shared/ui/leaderboard/page'
import Socials from '@/shared/ui/socials/page'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <HeroSections/>
      <OurRewardsSection/>
      <Leaderboard/>
    <Socials/>
    <Footer/>
    </>
  )
}

export default page
