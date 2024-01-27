import Logo from "../assets/logo.svg"
import { FC } from "react"

const Footer: FC = () => {
	return (
		<footer className="grid h-32 place-content-center bg-teal-500">
			<img alt="log" src={Logo} />
		</footer>
	)
}

export default Footer
