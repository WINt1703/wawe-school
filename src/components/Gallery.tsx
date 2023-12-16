import { FC, useState } from "react"
import { Category } from "../utils/hooks/useGallery"

type GalleryProps = {
  currentCategory?: string
  showMore?: (category: string) => void
  categories: Array<Category>
}

const Gallery: FC<GalleryProps> = ({ categories, currentCategory, showMore }) => {
  const [category, setCategory] = useState<string>(currentCategory ?? categories[0].name)
  const photos = categories.find((c) => c.name === category)?.photos
  const categoryHandler = (name: string): void => setCategory(name)

  return (
    <div className="mx-auto grid place-content-center space-y-8">
      <div className="title">Gallery</div>
      <div className="flex gap-x-5">
        {categories.map((c, i) => (
          <div key={i} className={`uppercase hover:cursor-pointer ${category === c.name ? "text-teal-400" : ""}`} onClick={() => categoryHandler(c.name)}>
            {c.name}
          </div>
        ))}
      </div>
      {photos && (
        <div className="grid max-w-6xl grid-cols-4 gap-10">
          {photos.map((p, i) => (
            <img src={p} alt="" className={`h-52 w-full object-cover ${(i + 1) % 6 === 1 || !((i + 1) % 6) ? "col-span-2" : "col-span-1"}`} />
          ))}
        </div>
      )}
      <button type="button" onClick={() => showMore && showMore(category)} className="w-fit justify-self-center border border-neutral-300 px-20 py-5">
        Show more
      </button>
    </div>
  )
}

export default Gallery
