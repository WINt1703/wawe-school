import PlanItem from "../components/PlanItem"
import usePlans from "../utils/hooks/usePlans"
import { FC } from "react"

const PlansSection: FC = () => {
	const { plans } = usePlans()

	return (
		<section id="price" className="space-y-6 bg-gray-100 py-10">
			<div className="title">Plans</div>
			<div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
				{plans?.map((p) => (
					<PlanItem
						key={p.id}
						name={p.name}
						price={p.price}
						benefits={p.benefits}
					/>
				))}
			</div>
		</section>
	)
}

export default PlansSection
