import useTeam from "../utils/hooks/useTeam"
import Member from "./Member"
import { FC } from "react"

const Team: FC = () => {
	const { employee } = useTeam()

	return (
		<div className="space-y-14">
			<p className="title">Out team</p>
			<div className="flex flex-col items-center justify-center gap-x-24 gap-y-8 lg:flex-row">
				{employee?.map((emp) => (
					<Member
						key={emp.id}
						photo={emp.avatar}
						name={emp.name}
						jobPosition={emp.position}
					/>
				))}
			</div>
		</div>
	)
}

export default Team
