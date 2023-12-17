import { FC, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Slide } from "../utils/hooks/useBlog"

type CarouselProps = {
  slides: Array<Slide>
  itemTag: string
}

const Carousel: FC<CarouselProps> = ({ slides, itemTag }) => {
  const { hash } = useLocation()
  const [selectedSlide, setSelectedSlide] = useState(
    hash.slice(1) ?? itemTag + slides[0].id
  )

  useEffect(() => {
    setSelectedSlide(hash.slice(1))
  }, [hash])

  return (
    <div className="relative h-full">
      <div className="carousel absolute inset-0">
        {slides.map((s) => (
          <div
            id={itemTag + s.id}
            key={s.id}
            className="carousel-item relative h-full w-full"
          >
            <img
              alt={s.theme}
              className="absolute h-full w-full object-cover brightness-50"
              src={s.photo}
            />
            <p className="absolute left-2/4 top-2/4 max-w-md text-3xl text-white">
              {s.theme}
              <div className="description text-white">{s.description}</div>
            </p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-2/4 space-x-4">
        {slides.map((s) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            key={s.id}
            href={`#${itemTag}${s.id}`}
            className={`inline-block h-2.5 w-2.5 rounded-full ${
              selectedSlide === itemTag + s.id ? "bg-teal-400" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
