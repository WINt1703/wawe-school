import { FC, useEffect, useState } from "react"
import useGallery from "../utils/hooks/useGallery"
import Button from "./Button"

const Gallery: FC = () => {
  const { gallery } = useGallery()
  const [category, setCategory] = useState<string | undefined>()
  const photos = gallery?.categories.find((c) => c.name === category)?.photos
  const categoryHandler = (name: string): void => setCategory(name)

  useEffect(() => {
    if (gallery) {
      setCategory(gallery.currentCategory)
    }
  }, [gallery])

  return (
    gallery &&
    photos && (
      <div className="mx-auto grid place-content-center space-y-8">
        <div className="title">Gallery</div>
        <div className="flex gap-x-5">
          {gallery.categories.map((c, i) => (
            <div
              key={i}
              className={`uppercase hover:cursor-pointer ${
                category === c.name ? "text-teal-400" : ""
              }`}
              onClick={() => categoryHandler(c.name)}
            >
              {c.name}
            </div>
          ))}
        </div>
        <div className="grid max-w-6xl grid-cols-4 gap-10">
          {photos!.map((p, i) => (
            <img
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
  )
}

export default Gallery
