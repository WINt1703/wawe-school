import useTeam from "../utils/hooks/useTeam"
import Member from "./Member"
import { FC } from "react"

const Team: FC = () => {
	const { team } = useTeam()

	if (!team) return <></>

	return (
		<div className="space-y-14">
			<p className="title">Out team</p>
			<div className="flex flex-col items-center justify-center gap-x-24 gap-y-8 lg:flex-row">
				{team.map((t) => (
					<Member
						key={t.id}
						photo={t.photo}
						name={t.name}
						jobPosition={t.jobPosition}
					/>
				))}
			</div>
		</div>
	)
}

export default Team
