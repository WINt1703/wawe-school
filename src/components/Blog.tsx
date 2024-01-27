import useBlog from "../utils/hooks/useBlog"
import Carousel from "./Carousel"
import { FC } from "react"

const Blog: FC = () => {
	const { slides, loading } = useBlog()

	if (loading) return <div className="text-center">Loading...</div>

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
