import { FC } from "react"
import Logo from "../assets/logo.svg"
import Surfing from "../assets/surfing-wawe.png"

const Introduce: FC = () => {
  return (
    <div className="relative h-full w-full">
      <img className="absolute max-h-screen w-full object-cover" src={Surfing} alt="surfing" />
      <div className="absolute h-48 w-full bg-gradient-to-b from-[#01353E]" />
      <div className="absolute flex h-full w-full flex-col pt-5">
        <div className="flex items-center justify-center gap-x-14 text-white">
          <img src={Logo} className="h-10 w-10" alt="logo" />
          <div className="decoration-[#00B2A0] underline-offset-4 hover:underline">About us</div>
          <div>Services</div>
          <div>Price</div>
          <div>Team</div>
          <div>Contacts</div>
        </div>
        <p className="flex-grow grid place-content-center mb-20 text-center leading-tight">
          <div className="font-raleway text-[200px] font-700 uppercase text-[#0D302C]">wawe</div>
          Surf school in the Canary Islands
        </p>
      </div>
    </div>
  )
}

export default Introduce
