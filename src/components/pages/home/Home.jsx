import React from 'react'
import Welcome from '../home/welcome/Welcome'
import HomeCard from '../home/homeCard/HomeCard'
import OurProducts from '../home/ourProducts/OurProducts'
import HomeDetails from '../home/homeDetails/HomeDetails'
import FeaturedHome from '../home/featuredHome/FeaturedHome'
const Home = () => {
  return <>
  <Welcome />
  <HomeCard />
  <OurProducts />
  <HomeDetails />
  <FeaturedHome />
  </>
}

export default Home