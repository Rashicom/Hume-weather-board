import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const LocationMarker = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location?.lat && location?.lon) {
      map.setView([location?.lat, location?.lon], 10);
    }
  }, [location, map]);

  if (!location?.lat || !location?.lon) return null;

  // Custom label above the marker
  const rainfallIcon = L.divIcon({
    className: "custom-rainfall-icon",
    html: `<div style="
      background-color: #5d9ce6;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      color: white;
      white-space: nowrap;
      box-shadow: 0 0 3px rgba(0,0,0,0.3);
    ">${location?.rainfall}mm</div>`,
    iconSize: [60, 20], // size of the div
    iconAnchor: [30, 50], // center bottom of the div
  });

  const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <>
      {/* Rainfall label ABOVE marker */}
      <Marker
        position={[location?.lat + 0.03, location?.lon]} // slight shift upwards (approx. 3km)
        icon={rainfallIcon}
        interactive={false}
      />
      {/* Regular marker pin */}
      <Marker position={[location?.lat, location?.lon]} icon={defaultIcon} />
    </>
  );
};

const RainfallChart = ({ location }) => {
  return (
    <MapContainer
      center={[10.8505, 76.2711]} // Default center (Kerala)
      zoom={7}
      style={{ width: "100%", height: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker location={location} />
    </MapContainer>
  );
};

export default RainfallChart;
