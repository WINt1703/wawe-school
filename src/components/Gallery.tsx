import useGallery from "../utils/hooks/useGallery"
import Button from "./Button"
import { FC, useEffect, useState } from "react"

const Gallery: FC = () => {
	const { categories, loading } = useGallery()
	const [categoryId, setCategoryId] = useState<number | undefined>()

	useEffect(() => {
		if (categories) setCategoryId(categories[0].id)
	}, [setCategoryId, categories])

	if (loading) return <div className="text-center">Loading...</div>
	else if (!categories) return <div className="text-center">Empty gallery</div>

	return (
		<div className="grid place-content-center space-y-8">
			<div className="title">Gallery</div>
			<div className="flex gap-x-5">
				{categories.map((c, i) => (
					<div
						key={i}
						className={`uppercase hover:cursor-pointer ${
							categoryId === c.id ? "text-teal-400" : ""
						}`}
						// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
						onClick={() => setCategoryId(c.id)}>
						{c.name}
					</div>
				))}
			</div>
			<div className="max-w-6xl grid-cols-4 gap-10 space-y-5 md:grid md:space-y-0">
				{categories
					.find((c) => c.id === categoryId)
					?.photos.map((p, i) => (
						<img
							key={i}
							src={p}
							alt=""
							className={`h-52 w-full object-cover ${
								(i + 1) % 6 === 1 || !((i + 1) % 6)
									? "col-span-2"
									: "col-span-1"
							}`}
						/>
					))}
			</div>
			<Button type="button" className="mx-auto">
				Show more
			</Button>
		</div>
	)
}

export default Gallery
