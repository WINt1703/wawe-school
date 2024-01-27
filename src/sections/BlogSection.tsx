import Carousel from "../components/Carousel"
import useBlog from "../utils/hooks/useBlog"
import { FC } from "react"

const BlogSection: FC = () => {
	const { slides, loading } = useBlog()

	if (loading) return <div className="text-center">Loading...</div>

	return (
		<section>
			<div className="title">Blog</div>
			<div className="h-full">
				<Carousel slides={slides} itemTag="blog_item" />
			</div>
		</section>
	)
}

export default BlogSection
