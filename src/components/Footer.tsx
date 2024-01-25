import Logo from "../assets/logo.svg"
import { FC } from "react"

const Footer: FC = () => {
	return (
		<div className="grid h-32 place-content-center bg-teal-500">
			<img alt="log" src={Logo} />
		</div>
	)
}

export default Footer
