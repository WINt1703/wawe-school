import Member from "../components/Member"
import useTeam from "../utils/hooks/useTeam"
import { FC } from "react"

const TeamSection: FC = () => {
	const { employee } = useTeam()

	return (
		<section id="team" className="space-y-14">
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
		</section>
	)
}

export default TeamSection
