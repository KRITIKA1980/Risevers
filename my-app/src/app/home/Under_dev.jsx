"use client";

import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Cell,
} from "recharts";

const mockData = [
  { year: 2021, startup: "AlphaX", layoffs: 100 },
  { year: 2021, startup: "BetaHub", layoffs: 25 },
  { year: 2021, startup: "CodeMint", layoffs: 10 },
  { year: 2022, startup: "AlphaX", layoffs: 50 },
  { year: 2022, startup: "BetaHub", layoffs: 60 },
  { year: 2022, startup: "NewWave", layoffs: 15 },
  { year: 2023, startup: "AlphaX", layoffs: 20 },
  { year: 2023, startup: "BetaHub", layoffs: 5 },
  { year: 2023, startup: "NewWave", layoffs: 0 },
  { year: 2023, startup: "CodeMint", layoffs: 8 },
  { year: 2024, startup: "NewWave", layoffs: 30 },
  { year: 2024, startup: "CodeMint", layoffs: 40 },
  { year: 2024, startup: "BetaHub", layoffs: 10 },
];

const COLOR_PALETTE = {
  chart: [
    "#8b5cf6",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#3b82f6",
    "#f97316",
    "#84cc16",
    "#ec4899",
    "#6366f1",
  ],
};

function pivotDataToChart(data) {
  const years = Array.from(new Set(data.map((d) => d.year))).sort();
  const startups = Array.from(new Set(data.map((d) => d.startup))).sort();
  const result = years.map((y) => {
    const row = { year: String(y) };
    startups.forEach((s) => {
      const found = data.find((d) => d.year === y && d.startup === s);
      row[s] = found ? found.layoffs : 0;
    });
    return row;
  });
  return { result, startups };
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-800 mb-2">{`Year: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.dataKey}: ${entry.value}`}
          </p>
        ))}
        <p className="text-xs text-gray-500 mt-2">
          Total: {payload.reduce((sum, entry) => sum + entry.value, 0)}
        </p>
      </div>
    );
  }
  return null;
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

const AnimatedTableRow = ({ data, index }) => (
  <tr
    className="border-b border-gray-100 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
    style={{
      animationDelay: `${index * 50}ms`,
      animation: `fadeInUp 0.5s ease-out ${index * 50}ms both`,
    }}
  >
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {data.year}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
      {data.startup}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold">
      {data.layoffs}
    </td>
  </tr>
);

export default function LayoffsPage() {
  const [raw, setRaw] = useState(mockData);
  const [chartData, setChartData] = useState([]);
  const [startups, setStartups] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChartLoading, setIsChartLoading] = useState(false);

  useEffect(() => {
    setIsChartLoading(true);
    const { result, startups } = pivotDataToChart(raw);
    setChartData(result);
    setStartups(startups);
    const timer = setTimeout(() => setIsChartLoading(false), 800);
    return () => clearTimeout(timer);
  }, [raw]);

  async function fetchFromApi() {
    setLoading(true);
    setIsChartLoading(true);
    try {
      const res = await fetch("/api/layoffs");
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setRaw(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch /api/layoffs, using sample data.");
    } finally {
      setLoading(false);
      setTimeout(() => setIsChartLoading(false), 800);
    }
  }

  const filtered = raw.filter((r) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      String(r.year).includes(q) ||
      r.startup.toLowerCase().includes(q) ||
      String(r.layoffs).includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Startup Layoffs Analytics
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track and analyze layoff trends across startups by year.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <input
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search by startup, year, or layoff count..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all"
              onClick={fetchFromApi}
              disabled={loading}
            >
              {loading ? "Loading..." : "Fetch Real Data"}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Layoffs Overview
          </h2>
          <div style={{ height: 400 }}>
            {isChartLoading ? (
              <LoadingSpinner />
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {startups.map((s, i) => (
                    <Bar
                      key={s}
                      dataKey={s}
                      stackId="a"
                      fill={COLOR_PALETTE.chart[i % COLOR_PALETTE.chart.length]}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Detailed Data
          </h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Startup
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Layoffs
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((data, index) => (
                  <AnimatedTableRow key={index} data={data} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
