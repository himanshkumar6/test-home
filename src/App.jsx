import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Feature from "./components/Feature"
import Service from "./components/Service"
import Footer from "./components/Footer"
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Feature></Feature>
      <Service></Service>
      <Footer></Footer>
    </div>
  )
}

export default App