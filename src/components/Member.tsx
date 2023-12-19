import { FC } from "react"

type MemberProp = {
  photo: string
  name: string
  jobPosition: string
}

const Member: FC<MemberProp> = ({ jobPosition, name, photo }) => {
  return (
    <span className="inline-block text-center">
      <img
        className="h-[450px] w-[330px] object-cover"
        src={photo}
        alt={name}
      />
      <p className="font-bold">{name}</p>
      <p className="description">{jobPosition}</p>
    </span>
  )
}

export default Member
