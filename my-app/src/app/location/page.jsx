"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";

// ✅ Helper component to update map center & zoom dynamically
function MapUpdater({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    if (map && center && zoom) {
      map.flyTo(center, zoom, { animate: true, duration: 1.5 });
    }
  }, [center, zoom, map]);

  return null;
}

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const CircleMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.CircleMarker),
  { ssr: false }
);

const ecosystemStats = {
  india: {
    totalStartups: 230000,
    activeCities: 46,
    growthRate: "40% YoY",
    failureRate: "70% in 5 years",
    description: "India's startup ecosystem is booming with unprecedented growth"
  },
  punjab: {
    registeredStartups: 1300,
    dpiitRecognized: 443,
    colleges: "1000-1500",
    description: "Punjab's startup ecosystem is rapidly growing"
  },
  delhi: {
    registeredStartups: 15000,
    unicorns: 26,
    closedStartups: 593,
    colleges: 874,
    description: "Delhi is one of India's most active startup hubs"
  }
};

export default function LocationPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStartups, setFilteredStartups] = useState([]);
  const [startupData, setStartupData] = useState([]);
  const [currentView, setCurrentView] = useState("india");
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // India
  const [mapZoom, setMapZoom] = useState(5);

  // ✅ Load startup data from public/startups.json
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/startups.json");
        const data = await res.json();
        setStartupData(data);
        setFilteredStartups(data);
      } catch (err) {
        console.error("Failed to load startups.json", err);
      }
    };
    load();
  }, []);

  // ✅ Search Handler
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredStartups(startupData);
      setCurrentView("india");
      setMapCenter([20.5937, 78.9629]);
      setMapZoom(5);
      return;
    }

    const query = searchQuery.toLowerCase();
    let filtered = [];
    let newView = "india";
    let newCenter = [20.5937, 78.9629];
    let newZoom = 5;

    if (query.includes("punjab") || query.includes("chandigarh")) {
      filtered = startupData.filter(
        (s) => s.city.toLowerCase() === "chandigarh"
      );
      newView = "punjab";
      newCenter = [30.7333, 76.7794];
      newZoom = 12;
    } else if (query.includes("delhi")) {
      filtered = startupData.filter((s) => s.city.toLowerCase() === "delhi");
      newView = "delhi";
      newCenter = [28.6139, 77.209];
      newZoom = 11;
    } else {
      filtered = startupData.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.city.toLowerCase().includes(query)
      );
      newView = "search";
    }

    setFilteredStartups(filtered);
    setCurrentView(newView);
    setMapCenter(newCenter);
    setMapZoom(newZoom);
  };

  // ✅ Quick Search Buttons
  const handleQuickSearch = (city) => {
    setSearchQuery(city);
    if (city === "Punjab") {
      setFilteredStartups(
        startupData.filter((s) => s.city.toLowerCase() === "chandigarh")
      );
      setCurrentView("punjab");
      setMapCenter([30.7333, 76.7794]);
      setMapZoom(12);
    } else if (city === "Delhi") {
      setFilteredStartups(
        startupData.filter((s) => s.city.toLowerCase() === "delhi")
      );
      setCurrentView("delhi");
      setMapCenter([28.6139, 77.209]);
      setMapZoom(11);
    } else {
      setFilteredStartups(startupData);
      setCurrentView("india");
      setMapCenter([20.5937, 78.9629]);
      setMapZoom(5);
    }
  };

  // ✅ Calculate Stats
  const calculateStats = () => {
    const data = currentView === "india" ? startupData : filteredStartups;
    const active = data.filter((s) => s.status === "active").length;
    const closed = data.filter((s) => s.status === "closed").length;
    const total = data.length;
    const successRate = total > 0 ? ((active / total) * 100).toFixed(1) : 0;
    return { active, closed, total, successRate };
  };

  const stats = calculateStats();
  const currentEcosystem = ecosystemStats[currentView] || ecosystemStats.india;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            🗺️ India Startup Ecosystem Map
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover startups, track growth, and explore opportunities across
            India
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto mb-4">
            <input
              type="text"
              placeholder="Search for Punjab, Delhi, or startup names..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Quick Search Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => handleQuickSearch("")}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
            >
              🇮🇳 View All India
            </button>
            <button
              onClick={() => handleQuickSearch("Punjab")}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
            >
              📍 Punjab Ecosystem
            </button>
            <button
              onClick={() => handleQuickSearch("Delhi")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
            >
              🏙️ Delhi Ecosystem
            </button>
          </div>

          {/* Map Container */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {currentView === "india"
                  ? "India Startup Map"
                  : currentView === "punjab"
                  ? "Punjab Startup Ecosystem"
                  : currentView === "delhi"
                  ? "Delhi Startup Ecosystem"
                  : "Search Results"}
              </h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {filteredStartups.length} startups
              </span>
            </div>

            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              style={{ height: "500px", width: "100%", borderRadius: "10px" }}
            >
              {/* ✅ This component dynamically updates map position */}
              <MapUpdater center={mapCenter} zoom={mapZoom} />

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {filteredStartups.map((startup) => (
                <CircleMarker
                  key={startup.id}
                  center={[startup.latitude, startup.longitude]}
                  pathOptions={{
                    color:
                      startup.status === "active" ? "#16A34A" : "#DC2626",
                    fillColor:
                      startup.status === "active" ? "#16A34A" : "#DC2626",
                    fillOpacity: 0.9,
                  }}
                  radius={6}
                >
                  <Popup>
                    <div className="text-sm">
                      <strong className="text-gray-900">{startup.name}</strong>
                      <div className="mt-1">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                            startup.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {startup.status}
                        </span>
                      </div>
                      <div className="mt-2 text-gray-600">
                        📍 {startup.city}
                      </div>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>

            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                {currentView === "india"
                  ? "Explore startup ecosystems across India. Click on Punjab or Delhi for regional views."
                  : "Click on markers to see startup details • Green = Active, Red = Closed"}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        {/* Enhanced Bottom Info Section */}
<div className="mt-12">
  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-[#E5E5E5]">
    <div className="text-center">
      
      {/* Header with Icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-[#F9F9F9] p-4 rounded-2xl border border-[#E5E5E5]">
          <span className="text-2xl">
            {currentView === "india" ? "🇮🇳" : 
             currentView === "punjab" ? "📍" : "🏙️"}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-3xl font-black text-[#34312C] mb-6 tracking-tight">
        RiseVerse Ecosystem Insights
      </h3>

      {/* Content with Stats */}
      <div className="bg-[#F9F9F9] rounded-xl p-6 border border-[#E5E5E5] shadow-sm mb-6">
        <p className="text-[#34312C] text-lg leading-relaxed font-medium mb-4">
          {currentView === "india"
            ? "India's startup ecosystem is booming with 2.3L+ startups across 46+ cities, growing at 40% YoY. With 112 unicorns and $25B funding in 2024, RiseVerse bridges collaboration gaps in this rapidly expanding landscape."
            : currentView === "punjab"
            ? "Punjab's ecosystem features 1,300+ startups with 85% success rate, strong in AgriTech (25%) and IT services. With 1,000+ colleges and 45 incubation centers, RiseVerse connects local talent to national opportunities."
            : "Delhi leads with 15,000+ startups, 26 unicorns, and $18B funding. Boasting 96% success rate and 120+ incubators, RiseVerse scales these proven models to emerging ecosystems nationwide."}
        </p>
      </div>

      {/* Dynamic Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        
        {currentView === "india" && (
          <>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">2.3L+</div>
              <div className="text-[#34312C] text-xs">Startups</div>
            </div>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">46+</div>
              <div className="text-[#34312C] text-xs">Cities</div>
            </div>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">112</div>
              <div className="text-[#34312C] text-xs">Unicorns</div>
            </div>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">40%</div>
              <div className="text-[#34312C] text-xs">YoY Growth</div>
            </div>
          </>
        )}

        {currentView === "punjab" && (
          <>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">1,300+</div>
              <div className="text-[#34312C] text-xs">Startups</div>
            </div>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">85%</div>
              <div className="text-[#34312C] text-xs">Success Rate</div>
            </div>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">1,000+</div>
              <div className="text-[#34312C] text-xs">Colleges</div>
            </div>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">45</div>
              <div className="text-[#34312C] text-xs">Incubators</div>
            </div>
          </>
        )}

        {currentView === "delhi" && (
          <>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">15K+</div>
              <div className="text-[#34312C] text-xs">Startups</div>
            </div>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">26</div>
              <div className="text-[#34312C] text-xs">Unicorns</div>
            </div>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">96%</div>
              <div className="text-[#34312C] text-xs">Success Rate</div>
            </div>
            <div className="bg-[#F9F9F9] p-3 rounded-xl border border-[#E5E5E5]">
              <div className="text-[#FD8F02] font-bold text-lg">$18B</div>
              <div className="text-[#34312C] text-xs">Funding</div>
            </div>
          </>
        )}
      </div>

      {/* Sector Highlights */}
      <div className="mt-6">
        <div className="inline-flex flex-wrap gap-2 justify-center">
          {currentView === "india" && (
            <>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                Enterprise Tech
              </span>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                FinTech
              </span>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                E-commerce
              </span>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                EdTech
              </span>
            </>
          )}
          {currentView === "punjab" && (
            <>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                AgriTech
              </span>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                IT Services
              </span>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                Education
              </span>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                Healthcare
              </span>
            </>
          )}
          {currentView === "delhi" && (
            <>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                IT & SaaS
              </span>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                FinTech
              </span>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                E-commerce
              </span>
              <span className="bg-[#F9F9F9] text-[#34312C] px-3 py-1 rounded-full text-sm border border-[#E5E5E5]">
                EdTech
              </span>
            </>
          )}
        </div>
      </div>

    </div>
  </div>
</div>

      </div>
    </div>
  );
}
