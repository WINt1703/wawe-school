import { FC } from "react"
import { useLocation } from "react-router-dom"
import Logo from "../assets/logo.svg"
import Surfing from "../assets/surfing-wawe.png"

type IntroduceProps = {
  aboutHref: string
  servicesHref: string
  priceHref: string
  teamHref: string
  contactsHref: string
}

const Introduce: FC<IntroduceProps> = ({
  aboutHref,
  contactsHref,
  priceHref,
  servicesHref,
  teamHref,
}) => {
  const { hash } = useLocation()
  const className = (href: string): string => {
    const hrefClassName = "decoration-teal-400 underline-offset-8 underline"

    return `${hash === href ? hrefClassName : ""} hidden md:block`
  }
  return (
    <div
      style={{
        backgroundImage: `url('${Surfing}')`,
      }}
      className="relative h-full w-full bg-cover"
    >
      <div className="absolute flex h-full w-full flex-col">
        <div className="flex h-48 justify-center gap-x-14  bg-gradient-to-b from-[#01353E] pt-5 text-white">
          <img src={Logo} className="h-10 w-10" alt="logo" />
          <a href={aboutHref} className={className(aboutHref)}>
            About us
          </a>
          <a href={servicesHref} className={className(servicesHref)}>
            Services
          </a>
          <a href={priceHref} className={className(priceHref)}>
            Price
          </a>
          <a href={teamHref} className={className(teamHref)}>
            Team
          </a>
          <a href={contactsHref} className={className(contactsHref)}>
            Contacts
          </a>
        </div>
        <p className="mb-20 grid grow place-content-center text-center text-xs leading-tight lg:text-base">
          <div className="font-raleway text-4xl font-700 uppercase text-[#0D302C] sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
            wawe
          </div>
          Surf school in the Canary Islands
        </p>
      </div>
    </div>
  )
}

export default Introduce
