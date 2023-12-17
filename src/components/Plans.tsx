import { FC } from "react"
import usePlans from "../utils/hooks/usePlans"
import PlanItem from "./PlanItem"

const Plans: FC = () => {
  const { plans } = usePlans()

  return (
    plans && (
      <div className="space-y-6 bg-gray-100 py-10">
        <div className="title">Plans</div>
        <div className="flex justify-center space-x-10">
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
  )
}

export default Plans
