import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface MapProps {
  lat: number;
  lng: number;
}

export const Map = ({ lat, lng }: MapProps) => {
  return (
    <div>
      <MapContainer className='markercluster-map' center={{ lat, lng }} zoom={15} maxZoom={18}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[lat, lng]} />
      </MapContainer>
    </div>
  );
};
