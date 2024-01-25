import { FC } from "react"

type ResortStatsProps = {
	tourists: number
	hours: number
	trainings: number
	days: number
}
const ResortStats: FC<ResortStatsProps> = ({
	days,
	hours,
	tourists,
	trainings
}) => {
	return (
		<div className="flex flex-col justify-center gap-x-24 gap-y-8 lg:flex-row">
			<p className="text-center text-5xl font-bold leading-loose">
				{tourists}
				<span className="description block text-stone-600">tourists</span>
			</p>
			<p className="text-center text-5xl font-bold leading-loose">
				{hours}
				<span className="description block text-stone-600">
					hours of riding
				</span>
			</p>
			<p className="text-center text-5xl font-bold leading-loose">
				{trainings}
				<span className="description block text-stone-600">prof. trainers</span>
			</p>
			<p className="text-center text-5xl font-bold leading-loose">
				{days}
				<span className="description block text-stone-600">days of year</span>
			</p>
		</div>
	)
}

export default ResortStats
