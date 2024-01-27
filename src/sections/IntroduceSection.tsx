import Logo from "../assets/logo.svg"
import Surfing from "../assets/surfing-wawe.png"
import { FC } from "react"

const IntroduceSection: FC = () => {
	const linkClassName =
		"decoration-teal-400 underline-offset-8 hover:underline hidden md:block"
	return (
		<section
			className="flex h-full w-full flex-col"
			style={{
				backgroundImage: `url('${Surfing}')`
			}}>
			<div className="flex h-48 justify-center gap-x-14  bg-gradient-to-b from-[#01353E] pt-5 text-white">
				<img src={Logo} className="h-10 w-10" alt="logo" />
				<a href="#about" className={linkClassName}>
					About us
				</a>
				<a href="#services" className={linkClassName}>
					Services
				</a>
				<a href="#price" className={linkClassName}>
					Price
				</a>
				<a href="#team" className={linkClassName}>
					Team
				</a>
				<a href="#contacts" className={linkClassName}>
					Contacts
				</a>
			</div>
			<p className="mb-20 grid grow place-content-center text-center text-xs leading-tight dark:text-black lg:text-base">
				<span className="block font-raleway text-4xl font-700 uppercase text-[#0D302C] sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
					wawe
				</span>
				Surf school in the Canary Islands
			</p>
		</section>
	)
}

export default IntroduceSection
