import { FC } from "react"
import Peak from "../assets/surfing_peak.svg"

const ConquerPeak: FC = () => {
  return (
    <div className="grid h-full lg:grid-cols-2">
      <div className="m-auto inline-block max-w-[500px] space-y-20">
        <p className="title">CONQUER THE PEAKS</p>
        <p className="description">
          Our surf school teachers are among the best surfers in the Canary
          Islands. Among them is the European longboard champion, who will
          happily share his experience with both beginners and more experienced
          surfers. All members of the teaching staff are certified members of
          the Canary Islands Surfing Federation. Some of them know Russian,
          which definitely positions us as a Russian surf school abroad!
          <br />
          <br />
          The entire coaching staff regularly participates in seminars and
          advanced training courses held around the world by various well-known
          surf clubs and federations. Therefore, in our surf school you can rest
          assured: you are taught by the best coaches!
          <br />
          <br />
          The surfing teaching method is designed for both beginners,
          intermediate-level surfers, and TOP-level surfers. The coaches find an
          approach to everyone, despite the fact that surfing lessons at our
          school are taught in groups. However, we offer personal surf lessons -
          just you and a coach! P
        </p>
      </div>
      <img
        className="invisible h-full object-cover lg:visible"
        src={Peak}
        alt="surfing peak"
      />
    </div>
  )
}

export default ConquerPeak
