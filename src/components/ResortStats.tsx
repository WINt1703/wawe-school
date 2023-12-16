import { FC } from "react"

type ResortStatsProps = {
  tourists: number
  hours: number
  trainings: number
  days: number
}
const ResortStats: FC<ResortStatsProps> = ({ days, hours, tourists, trainings }) => {
  return (
    <div className="flex justify-center gap-x-24">
      <p className="text-center text-5xl font-bold leading-loose">
        {tourists}
        <div className="description text-stone-600">tourists</div>
      </p>
      <p className="text-center text-5xl font-bold leading-loose">
        {hours}
        <div className="description text-stone-600">hours of riding</div>
      </p>
      <p className="text-center text-5xl font-bold leading-loose">
        {trainings}
        <div className="description text-stone-600">prof. trainers</div>
      </p>
      <p className="text-center text-5xl font-bold leading-loose">
        {days}
        <div className="description text-stone-600">days of year</div>
      </p>
    </div>
  )
}

export default ResortStats
