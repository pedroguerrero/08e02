import PropTypes from 'prop-types';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map({ lat, lng, name }) {
  lat = lat || -33.4468662;
  lng = lng || -70.6616838;
  return (
    <MapContainer center={[lat, lng]} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          Nombre de <strong>{name}</strong>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  name: PropTypes.string,
};
