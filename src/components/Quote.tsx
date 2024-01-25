import { FC } from "react"

const Quote: FC = () => {
	return (
		<p className="text-center text-2xl md:text-3xl">
			«When in doubt, go for a ride.»
			<span className="description block text-stone-400 md:indent-96">
				Nat Young, first World Surfing Champion
			</span>
		</p>
	)
}

export default Quote
