import { FC } from "react"

type PlanItemProp = {
	name: string
	price: number
	benefits: Array<string>
}

const PlanItem: FC<PlanItemProp> = ({ benefits, name, price }) => {
	return (
		<div className="inline-flex h-[590px] w-[360px] flex-col space-y-7 bg-white p-10">
			<p className="text-center text-xl">{name}</p>
			<div className="description grow space-y-6">
				{benefits.map((b, i) => (
					<div key={i}>{b}</div>
				))}
			</div>
			<p className="text-center text-xl text-blue-950">
				{price}
				<span className="ml-1 align-middle text-xs">$</span>
			</p>
		</div>
	)
}

export default PlanItem
