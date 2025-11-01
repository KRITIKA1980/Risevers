"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
// Custom icons
const activeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // green
  iconSize: [30, 30],
});

const closedIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/190/190406.png", // red
  iconSize: [30, 30],
});

export default function LocationPage() {
  const [city, setCity] = useState("");
  const [allStartups, setAllStartups] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cityCoords, setCityCoords] = useState([20.5937, 78.9629]); // India default

  useEffect(() => {
    fetch("/startups.json")
      .then((res) => res.json())
      .then((data) => setAllStartups(data));
  }, []);

  const handleSearch = async () => {
    const results = allStartups.filter(
      (s) => s.city.toLowerCase() === city.toLowerCase()
    );
    setFiltered(results);

    // Get coordinates from OpenStreetMap
    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
    );
    const geoData = await geoRes.json();
    if (geoData.length > 0) {
      setCityCoords([parseFloat(geoData[0].lat), parseFloat(geoData[0].lon)]);
    }
  };

  const activeCount = filtered.filter((s) => s.status === "active").length;
  const closedCount = filtered.filter((s) => s.status === "closed").length;

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">
        🗺️ City-wise Startup Map
      </h1>

      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city (e.g., Chandigarh)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded-xl p-2 w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {filtered.length > 0 ? (
        <>
          <div className="text-center mb-4">
            <p>
              📍 <strong>{city}</strong> me total{" "}
              <strong>{filtered.length}</strong> startups hain.
            </p>
            <p className="text-green-600">✅ Active: {activeCount}</p>
            <p className="text-red-600">❌ Closed: {closedCount}</p>
          </div>

          <MapContainer
            key={cityCoords.join(",")}
            center={cityCoords}
            zoom={13}
            style={{ height: "500px", width: "100%", borderRadius: "12px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {filtered.map((s) => (
              <Marker
                key={s.id}
                position={[s.latitude, s.longitude]}
                icon={s.status === "active" ? activeIcon : closedIcon}
              >
                <Popup>
                  <strong>{s.name}</strong> <br />
                  Status:{" "}
                  <span
                    style={{
                      color: s.status === "active" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {s.status}
                  </span>
                  <br />
                  City: {s.city}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </>
      ) : (
        city && (
          <p className="text-center text-gray-500">
            No startups found for <strong>{city}</strong>.
          </p>
        )
      )}
    </div>
  );
}
