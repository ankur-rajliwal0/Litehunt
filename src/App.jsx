import { Route, Routes } from "react-router-dom"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import WhyChoose from "./Pages/WhyChoose"
import Pricing from "./Pages/Pricing"
import Projects from "./Pages/Projects"
import Layout from "./Layout/Layout"
import OurMission from "./Pages/OurMission"






function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>


          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/WhyChoose" element={<WhyChoose />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/About" element={<WhyChoose />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Portfolio" element={<Projects />} />
        </Route>
      </Routes>






    </>
  )
}

export default App
