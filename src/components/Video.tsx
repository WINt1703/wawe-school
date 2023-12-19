import { FC } from "react"

const Video: FC = () => {
  return (
    <iframe
      className="h-full max-h-96 w-3/4 max-w-7xl rounded-md"
      src="https://www.youtube.com/embed/ma67yOdMQfs"
      title="These Were The All-Time Surfing Moments Of The Year | Best Of 2020"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  )
}

export default Video
