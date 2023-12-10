import { FC } from "react"
import Airplane from "../assets/airplane.svg"
import LongWaWe from "../assets/long_wawe.svg"
import MiddleWaWe from "../assets/middle_wawe.svg"
import ShortWaWe from "../assets/short_wawe.svg"
import SunSee from "../assets/sun_see.svg"
import Surfing from "../assets/surfing.svg"

const AdvantagesSchool: FC = () => {
  return (
    <div className="grid h-full place-content-center">
      <div className="title">AT SCHOOL YOU WILL GET</div>
      <div className="flex justify-center">
        <div className="inline-block space-y-20">
          <div className="mt-10 flex justify-center gap-x-16">
            <div className="max-w-[350px] space-y-4">
              <div className="flex h-16 place-content-center place-items-center gap-x-3">
                <img src={SunSee} alt="sun and see" />
                <p>ACCOMMODATION</p>
              </div>
              <p className="description !mt-0">Our surf school is located 100 m from the ocean coast. It features an outdoor pool and free Wi-Fi. The upper terrace offers ocean views. Distance to city center 15 min.</p>
            </div>
            <div className="max-w-[350px] space-y-4">
              <div className="flex h-16 place-content-center place-items-center gap-x-3">
                <img src={Airplane} alt="sun and see" />
                <p>
                  FLIGHT AND
                  <br />
                  INSURANCE
                </p>
              </div>
              <p className="description !mt-0">All program participants are insured by Allianz insurance company. Flights from Tenerife to Lanzarote and back are included in the price of the program</p>
            </div>
            <div className="max-w-[350px] space-y-4">
              <div className="flex h-16 place-content-center place-items-center gap-x-3">
                <img src={Surfing} alt="sun and see" />
                <p className="">
                  TRAINING AND
                  <br />
                  EQUIPMENT
                </p>
              </div>
              <p className="description !mt-0">All equipment and supplies are from well-known manufacturers and are provided for the entire course of the program. The training process begins with determining your skiing level</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="space-y-2">
              <div>
                <img src={ShortWaWe} className="inline-block" alt="short wawe" />
                <p className="ml-3 inline-block">85%</p>
                <p className="description">We came for the second time</p>
              </div>
              <div>
                <img className="inline-block" src={MiddleWaWe} alt="middle wawe" />
                <p className="ml-3 inline-block">95%</p>
                <p className="description">Learned to ride</p>
              </div>
              <div>
                <img className="inline-block" src={LongWaWe} alt="long wawe" />
                <p className="ml-3 inline-block">99%</p>
                <p className="description">Satisfied clients</p>
              </div>
            </div>
            <p className="description w-[600px]">
              A huge advantage of our school is its own teaching methodology. We have developed our own style of teaching surfing, which allows beginners to get on the board as quickly as possible.
              <br />
              <br />
              <br />
              It was our methodology and our teachers that allowed us to pass the certification of the Canary Islands Surfing Federation - FEDERACIÓN CANARIA DE SURF. This means that our school meets all international standards. Recertification is carried out annually and this allows us to always strive to improve training.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvantagesSchool
