import useGallery from "../utils/hooks/useGallery"
import Button from "./Button"
import { FC } from "react"

const Gallery: FC = () => {
	const { categories, loading, more, setSelected, selected } = useGallery(9)

	return (
		<div className="grid place-content-center space-y-8">
			<div className="title">Gallery</div>
			<div className="flex gap-x-5">
				{categories?.map((c) => (
					<div
						key={c.id}
						className={`uppercase hover:cursor-pointer ${
							selected?.id === c.id ? "text-teal-400" : ""
						}`}
						onClick={() => setSelected(c)}>
						{c.name}
					</div>
				))}
			</div>
			<div className="max-w-6xl grid-cols-4 gap-10 space-y-5 md:grid md:space-y-0">
				{selected?.photos.map((p, i) => (
					<img
						key={i}
						src={p}
						alt=""
						className={`h-52 w-full object-cover ${
							(i + 1) % 6 === 1 || !((i + 1) % 6) ? "col-span-2" : "col-span-1"
						}`}
					/>
				))}
			</div>
			<Button
				type="button"
				loading={loading}
				disabled={loading || selected?.noMorePhoto}
				className="mx-auto"
				onClick={() => more(3)}>
				{selected?.noMorePhoto ? "All loaded" : "Show more"}
			</Button>
		</div>
	)
}

export default Gallery
