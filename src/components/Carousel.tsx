import { Slide } from "../utils/hooks/useBlog"
import { FC, RefObject, createRef, useEffect, useRef, useState } from "react"
import { useSwipeable } from "react-swipeable"

type CarouselProps = {
	slides?: Array<Slide>
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
	const carouselRef = useRef<HTMLDivElement>(null)
	const [slidesRef, setSlidesRef] = useState<Array<RefObject<HTMLDivElement>>>(
		[]
	)
	const [selected, setSelected] = useState(0)
	const { ref, onMouseDown } = useSwipeable({
		onSwipedLeft: () =>
			setSelected((previous) =>
				slides?.length === previous + 1 ? 0 : previous + 1
			),
		onSwipedRight: () =>
			setSelected((previous) =>
				previous === 0 ? (slides?.length ? slides.length - 1 : 0) : previous - 1
			)
	})

	useEffect(() => {
		if (slidesRef[selected]?.current?.clientWidth && carouselRef.current) {
			const scrollOffset = selected * slidesRef[selected].current!.clientWidth

			if (carouselRef.current.scrollLeft !== scrollOffset) {
				carouselRef.current.scrollTo({
					left: scrollOffset
				})
			}
		}
	}, [selected, slidesRef])

	useEffect(() => {
		if (slides)
			setSlidesRef((previous) =>
				Array.from({ length: slides.length }).map(
					(_, i) => previous[i] || createRef()
				)
			)
	}, [slides])

	useEffect(() => {
		ref(carouselRef.current)
	}, [carouselRef, ref])

	return (
		<div className="relative h-full">
			<div
				ref={carouselRef}
				onMouseDown={onMouseDown}
				className="carousel absolute inset-0">
				{slides?.map((s, i) => (
					<div
						ref={slidesRef[i]}
						key={s.id}
						className="carousel-item grid h-full w-full items-center bg-black/50 bg-cover bg-blend-multiply lg:grid-cols-2"
						style={{
							backgroundImage: `url('${s.photo}')`
						}}>
						<p className="col-start-2 max-w-md text-3xl text-white md:top-2/4 lg:left-2/4 lg:right-0">
							{s.theme}
							<span className="description block break-keep text-white">
								{s.description}
							</span>
						</p>
					</div>
				))}
			</div>
			<div className="absolute bottom-3 left-2/4 space-x-4">
				{slides?.map((s, i) => (
					<span
						key={s.id}
						onClick={() => setSelected(i)}
						className={`inline-block h-2.5 w-2.5 rounded-full ${
							selected === i ? "bg-teal-400" : "bg-white"
						}`}
					/>
				))}
			</div>
		</div>
	)
}

export default Carousel
