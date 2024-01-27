import { FC } from "react"

const ResortStatsSection: FC = () => {
	return (
		<div className="flex flex-col justify-center gap-x-24 gap-y-8 lg:flex-row">
			<p className="text-center text-5xl font-bold leading-loose">
				1000
				<span className="description block text-stone-600">tourists</span>
			</p>
			<p className="text-center text-5xl font-bold leading-loose">
				300
				<span className="description block text-stone-600">
					hours of riding
				</span>
			</p>
			<p className="text-center text-5xl font-bold leading-loose">
				10 000
				<span className="description block text-stone-600">prof. trainers</span>
			</p>
			<p className="text-center text-5xl font-bold leading-loose">
				365
				<span className="description block text-stone-600">days of year</span>
			</p>
		</div>
	)
}

export default ResortStatsSection
