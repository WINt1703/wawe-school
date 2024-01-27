import useOutLocation from "../utils/hooks/useOutLocation"
import { FC } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const OutLocation: FC = () => {
	const { map } = useOutLocation()

	if (!map) return <></>

	return (
		<MapContainer
			zoom={10.5}
			minZoom={10}
			maxZoom={17}
			doubleClickZoom
			className="h-full w-full"
			center={map.zoom}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<Marker position={map.location}>
				<Popup>
					<img
						className="h-64 w-64 rounded-md object-cover"
						src={map?.photo}
						alt="surfing center"
					/>
				</Popup>
			</Marker>
		</MapContainer>
	)
}

export default OutLocation
