import { FC } from "react"
import useTeam from "../utils/hooks/useTeam"
import Member from "./Member"

const Team: FC = () => {
  const { team } = useTeam()
  return (
    team && (
      <div className="space-y-12">
        <p className="title">Out team</p>
        <div className="flex justify-center gap-x-24">
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
  )
}

export default Team
