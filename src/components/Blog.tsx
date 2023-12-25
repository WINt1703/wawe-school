import { FC } from "react"
import useBlog from "../utils/hooks/useBlog"
import Carousel from "./Carousel"

const Blog: FC = () => {
  const { slides } = useBlog()
  if (!slides) return <></>
  return (
    <>
      <div className="title">Blog</div>
      <div className="h-full">
        <Carousel slides={slides} itemTag="blog_item" />
      </div>
    </>
  )
}

export default Blog
