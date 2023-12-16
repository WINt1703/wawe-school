import { FC } from "react"

type VideoProps = {
  width: number
  height: number
}

const Video: FC<VideoProps> = (props) => {
  return <iframe {...props} className="rounded-md" src="https://www.youtube.com/embed/ma67yOdMQfs" title="These Were The All-Time Surfing Moments Of The Year | Best Of 2020" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
}

export default Video
