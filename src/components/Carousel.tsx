import { FC, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Slide } from "../utils/hooks/useBlog"

type CarouselProps = {
  slides: Array<Slide>
  itemTag: string
}

const Carousel: FC<CarouselProps> = ({ slides, itemTag }) => {
  const { hash } = useLocation()
  const [selectedSlide, setSelectedSlide] = useState<string>()

  useEffect(() => {
    const href = hash.slice(1)
    setSelectedSlide(href === "" ? itemTag + slides[0].id : href)
  }, [hash])

  return (
    <div className="relative h-full">
      <div className="carousel absolute inset-0">
        {slides.map((s) => (
          <div
            id={itemTag + s.id}
            data-testid={itemTag + s.id}
            key={s.id}
            className="carousel-item grid h-full w-full items-center bg-cover lg:grid-cols-2"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${s.photo})`,
            }}
          >
            <p className="col-start-2 max-w-md text-3xl text-white md:top-2/4 lg:left-2/4 lg:right-0">
              {s.theme}
              <span className="description block text-white">
                {s.description}
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-2/4 space-x-4">
        {slides.map((s) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            key={s.id}
            data-testid={`#${itemTag}${s.id}`}
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
