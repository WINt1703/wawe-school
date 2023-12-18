import { FC } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import useOutLocation from "../utils/hooks/useOutLocation"

const OutLocation: FC = () => {
  const { location } = useOutLocation()
  return (
    location && (
      <MapContainer
        zoom={10.5}
        minZoom={10}
        maxZoom={17}
        doubleClickZoom
        className="h-full w-full"
        center={[location.zoomCenter.lat, location.zoomCenter.lng]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[location.ourLocation.lat, location.ourLocation.lng]}>
          <Popup>
            <img
              className="h-64 w-64 object-cover"
              src={location.surfingHousePhoto}
              alt="surfing center"
            />
          </Popup>
        </Marker>
      </MapContainer>
    )
  )
}

export default OutLocation
