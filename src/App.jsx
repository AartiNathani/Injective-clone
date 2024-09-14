// import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import NumberCounting from "./components/NumberCounting"
import FinancialApps from "./components/FinancialApps"
import DiscoverEcosystem from "./components/DiscoverEcosystem"
import FeaturedApps from "./components/FeaturedApps"
import StartedInjective from "./components/StartedInjective"
import GovernINJ from "./components/GovernINJ"
import Footer from "./components/Footer"
import FeaturedNews from "./components/FeaturedNews"

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
// import Swapping from "./components/SlidingGrid"
// import SlidingGrid from "./components/SlidingGrid2";

function App() {

  return (
    <>
    <div className="">
      <div className="bg-white relative">
        <div className="mt-3"><FaGithub className="hover-blue app-icon-height"/></div>
        <div className="mt-3"><FaTwitter className="hover-blue app-icon-height"/></div>
        <div className="mt-3"><TfiWrite className="hover-blue app-icon-height"/></div>
        <div className="mt-3"><FaDiscord className="hover-blue app-icon-height"/></div>
        <div className="mt-3 mb-3"><FaTelegram className="hover-blue app-icon-height"/></div>
      </div>

      <Navbar/>
      {/* <SlidingGrid/> */}
      {/* <SlidingGrid/> */}
      {/* <Swapping/> */}
      <Home/>
      <NumberCounting/>
      <FinancialApps/>
      <DiscoverEcosystem/>
      <FeaturedApps/>
      <StartedInjective/>
      <GovernINJ/>
      <FeaturedNews/>
      <Footer/>
    </div>
    </>
  )
}

export default App
