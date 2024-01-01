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

  if (!gallery || !photos) return <></>

  return (
    <div className="mx-auto grid place-content-center space-y-8">
      <div className="title">Gallery</div>
      <div className="flex gap-x-5">
        {gallery.categories.map((c, i) => (
          <div
            key={i}
            className={`uppercase hover:cursor-pointer ${
              category === c.name ? "text-teal-400" : ""
            }`}
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            onClick={() => categoryHandler(c.name)}
          >
            {c.name}
          </div>
        ))}
      </div>
      <div className="max-w-6xl grid-cols-4 gap-10 space-y-5 md:grid md:space-y-0">
        {photos.map((p, i) => (
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
      <Button type="button" className="mx-auto">
        Show more
      </Button>
    </div>
  )
}

export default Gallery
