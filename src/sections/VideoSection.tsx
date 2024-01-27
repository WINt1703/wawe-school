import { FC } from "react"

const VideoSection: FC = () => {
	return (
		<section className="flex justify-center">
			<iframe
				className="aspect-video h-full w-full max-w-4xl rounded-md"
				src="https://www.youtube.com/embed/ma67yOdMQfs"
				title="These Were The All-Time Surfing Moments Of The Year | Best Of 2020"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
		</section>
	)
}

export default VideoSection
