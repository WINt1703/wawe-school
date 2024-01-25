import usePlans from "../utils/hooks/usePlans"
import PlanItem from "./PlanItem"
import { FC } from "react"

const Plans: FC = () => {
	const { plans } = usePlans()

	if (!plans) return <></>

	return (
		<div className="space-y-6">
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
		</div>
	)
}

export default Plans
