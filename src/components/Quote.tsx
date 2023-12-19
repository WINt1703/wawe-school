import { FC } from "react"

const Quote: FC = () => {
  return (
    <p className="text-center text-2xl md:text-3xl">
      «When in doubt, go for a ride.»
      <div className="description text-stone-400 md:indent-96">
        Nat Young, first World Surfing Champion
      </div>
    </p>
  )
}

export default Quote
