import Navbar from "../components/utils/navbar";
import Hero from '../components/homepage/Hero'
import PopularVac from '../components/homepage/popular-vac'
import PopularCat from "../components/homepage/popular-cat";
import HowItWorks from "../components/homepage/how-it-works";


export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PopularVac/>
      <HowItWorks/>
      <PopularCat/>
    </div>
  )
}
