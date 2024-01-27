import AboutSchoolSection from "./sections/AboutSchoolSection"
import AdvantagesSchoolSection from "./sections/AdvantagesSchoolSection"
import BlogSection from "./sections/BlogSection"
import ConquerPeakSection from "./sections/ConquerPeakSection"
import FeedbackSection from "./sections/FeedbackSection"
import Footer from "./sections/Footer"
import GallerySection from "./sections/GallerySection"
import IntroduceSection from "./sections/IntroduceSection"
import OutLocationSection from "./sections/OutLocationSection"
import PlansSection from "./sections/PlansSection"
import QuoteSection from "./sections/QuoteSection"
import ResortStatsSection from "./sections/ResortStatsSection"
import TeamSection from "./sections/TeamSection"
import VideoSection from "./sections/VideoSection"
import { FC } from "react"

const App: FC = () => {
	return (
		<main className="h-full space-y-32 text-black dark:text-yellow-400">
			<IntroduceSection />
			<AboutSchoolSection />
			<AdvantagesSchoolSection />
			<GallerySection />
			<ConquerPeakSection />
			<QuoteSection />
			<VideoSection />
			<ResortStatsSection />
			<BlogSection />
			<TeamSection />
			<PlansSection />
			<OutLocationSection />
			<FeedbackSection />
			<Footer />
		</main>
	)
}

export default App
