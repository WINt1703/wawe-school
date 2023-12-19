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
    <div className="h-full space-y-32">
      <Introduce
        aboutHref={`#${aboutId}`}
        servicesHref={`#${servicesId}`}
        priceHref={`#${priceId}`}
        teamHref={`#${teamId}`}
        contactsHref={`#${contactsId}`}
      />
      <section id={aboutId}>
        <AboutSchool />
      </section>
      <section id={servicesId}>
        <AdvantagesSchool />
      </section>
      <ConquerPeak />
      <Quote />
      <div className="flex  justify-center">
        <Video />
      </div>
      <ResortStats tourists={1000} hours={555} trainings={10_000} days={365} />
      <Blog />
      <section id={teamId}>
        <Team />
      </section>
      <section id={priceId} className="bg-gray-100 py-10">
        <Plans />
      </section>
      <div className="flex h-full max-h-96 justify-center">
        <div className="flex h-full w-3/4 justify-center overflow-hidden rounded-3xl">
          <OutLocation />
        </div>
      </div>
      <section id={contactsId}>
        <Feedback />
      </section>
      <Footer />
    </div>
  )
}

export default App
