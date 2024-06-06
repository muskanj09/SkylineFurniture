import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import OurStory from './components/pages/ourStory/OurStory'
import Products from './components/pages/products/Products'
import Navbar from './components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'
import Press from '../src/components/pages/press/Press'
import Partners from '../src/components/pages/partners/Partners'
import Trade from '../src/components/pages/trade/Trade'
import Login from '../src/components/pages/login/Login'
import CreateAccount from '../src/components/pages/createAccount/CreateAccount'


import Latest from '../src/components/pages/products/latest/Latest'
import Bedroom from '../src/components/pages/products/bedroom/Bedroom'
import Dinning from '../src/components/pages/products/dinning/Dinning'
import Accent from '../src/components/pages/products/accentSeating/Accent'
import Benches from '../src/components/pages/products/benches/Benches'
import OfficeChair from '../src/components/pages/products/officeChair/OfficeChair'
// import OfficeChair from '../src/components/pages/products/officeChair/OfficeChair'
import Screens from '../src/components/pages/products/screens/Screens'
import Pillows from '../src/components/pages/products/pillows/Pillows'
const App = () => {
  return <>  
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our story" element={<OurStory />} />
      <Route path="/products" element={<Products />} />
      <Route path="/press" element={<Press />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createAccount" element={<CreateAccount />} />


      <Route path="/latest" element={<Latest />} />
      <Route path="/bedroom" element={<Bedroom />} />
      <Route path="/dining" element={<Dinning />} />
      <Route path="/accent" element={<Accent />} />
      <Route path="/benches" element={<Benches />} />
      <Route path="/officeChair" element={<OfficeChair />} />
      <Route path="/screens" element={<Screens />} />
      <Route path="/pillows" element={<Pillows />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </>
}

export default App
