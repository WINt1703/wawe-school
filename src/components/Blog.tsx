import { FC } from "react"
import useBlog from "../utils/hooks/useBlog"
import Carousel from "./Carousel"

const Blog: FC = () => {
  const { slides } = useBlog()
  return (
    slides && (
      <>
        <div className="title">Blog</div>
        <div className="h-4/5">
          <Carousel slides={slides} itemTag="blog_item" />
        </div>
      </>
    )
  )
}

export default Blog
