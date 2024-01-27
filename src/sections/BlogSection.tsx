import Carousel from "../components/Carousel"
import useBlog from "../utils/hooks/useBlog"
import { FC } from "react"

const BlogSection: FC = () => {
	const { slides, loading } = useBlog()

	if (loading) return <div className="text-center">Loading...</div>

	return (
		<section className="h-full">
			<div className="title">Blog</div>
			<div className="h-full">
				<Carousel slides={slides} />
			</div>
		</section>
	)
}

export default BlogSection
