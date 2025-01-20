import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import HeroSection from "./components/homepage/herosection"
import { LastMinuteDeals } from "./components/homepage/lastMinuteDeals"
import { Locations } from "./components/homepage/locations"
import { PopularSpaces } from "./components/homepage/popularSpaces"
import { SpacesLists } from "./components/homepage/spacesLists"
import { Testimonials } from "./components/testimonials"

function App() {

  return (
    <>

      <Header />
      <HeroSection />
      <PopularSpaces />
      <LastMinuteDeals />
      <Locations />
      <SpacesLists />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
