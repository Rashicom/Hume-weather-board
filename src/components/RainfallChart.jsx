import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const RainfallMarker = ({ lat, lon, rainfall }) => {
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
    
    ">${rainfall}mm</div>`,
    iconSize: [70, 20],
    iconAnchor: [30, 0],
  });

  const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <>
      <Marker
        position={[lat + 0.03, lon]}
        icon={rainfallIcon}
        interactive={false}
      />

      <Marker position={[lat, lon]} icon={defaultIcon} />
    </>
  );
};

// Fit the map to show all markers
const FitBounds = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    if (locations?.length > 0) {
      const bounds = L.latLngBounds(
        locations.map((item) => [item.cordinate[1], item.cordinate[0]])
      );
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }, [locations, map]);

  return null;
};

const RainfallChart = ({ data }) => {
  return (
    <MapContainer
      center={[10.8505, 76.2711]} // Default center
      zoom={6}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        overflow: "hidden",
      }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Adjust map bounds based on data */}
      <FitBounds locations={data} />

      {/* Render multiple markers */}
      {data?.map((item, index) => (
        <RainfallMarker
          key={index}
          lat={item.cordinate[1]}
          lon={item.cordinate[0]}
          rainfall={item.rain_reading}
        />
      ))}
    </MapContainer>
  );
};

export default RainfallChart;
