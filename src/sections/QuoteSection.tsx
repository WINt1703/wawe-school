import { FC } from "react"

const QuoteSection: FC = () => {
	return (
		<section className="bg-gray-100 py-10 dark:bg-gray-800">
			<p className="text-center text-2xl md:text-3xl">
				«When in doubt, go for a ride.»
				<span className="description block text-stone-400 md:indent-96">
					Nat Young, first World Surfing Champion
				</span>
			</p>
		</section>
	)
}

export default QuoteSection
