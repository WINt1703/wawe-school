import { FC } from "react"
import AboutSchool from "./components/AboutSchool"
import AdvantagesSchool from "./components/AdvantagesSchool"
import Blog from "./components/Blog"
import ConquerPeak from "./components/ConquerPeak"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"
import Introduce from "./components/Introduce"
import OutLocation from "./components/OutLocation"
import Plans from "./components/Plans"
import Quote from "./components/Quote"
import ResortStats from "./components/ResortStats"
import Team from "./components/Team"
import Video from "./components/Video"

const aboutId = "about"
const servicesId = "service"
const priceId = "price"
const teamId = "team"
const contactsId = "contacts"

const App: FC = () => {
  return (
    <>
      <Introduce
        aboutHref={`#${aboutId}`}
        servicesHref={`#${servicesId}`}
        priceHref={`#${priceId}`}
        teamHref={`#${teamId}`}
        contactsHref={`#${contactsId}`}
      />
      <AboutSchool />
      <AdvantagesSchool />
      <ConquerPeak />
      <Quote />
      <Video width={0} height={0} />
      <ResortStats tourists={0} hours={0} trainings={0} days={0} />
      <Blog />
      <Team />
      <Plans />
      <div className="relative h-2/3 w-3/4 text-center overflow-hidden rounded-3xl">
        <OutLocation />
      </div>
      <Feedback />
      <Footer />
    </>
  )
}

export default App
