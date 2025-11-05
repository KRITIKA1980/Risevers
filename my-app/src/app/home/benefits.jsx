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
} from "recharts";

const mockData = [
  { year: 2020, category: "Active Startup Cities", value: 38 },
  { year: 2020, category: "Tier-2/3 City Growth", value: 15 },
  { year: 2020, category: "Startup Failure Rate", value: 70 },
  { year: 2021, category: "Active Startup Cities", value: 40 },
  { year: 2021, category: "Tier-2/3 City Growth", value: 25 },
  { year: 2021, category: "Startup Failure Rate", value: 68 },
  { year: 2022, category: "Active Startup Cities", value: 42 },
  { year: 2022, category: "Tier-2/3 City Growth", value: 35 },
  { year: 2022, category: "Startup Failure Rate", value: 65 },
  { year: 2023, category: "Active Startup Cities", value: 45 },
  { year: 2023, category: "Tier-2/3 City Growth", value: 50 },
  { year: 2023, category: "Startup Failure Rate", value: 62 },
  { year: 2024, category: "Active Startup Cities", value: 46 },
  { year: 2024, category: "Tier-2/3 City Growth", value: 65 },
  { year: 2024, category: "Startup Failure Rate", value: 58 },
  { year: 2025, category: "Active Startup Cities", value: 50 },
  { year: 2025, category: "Tier-2/3 City Growth", value: 80 },
  { year: 2025, category: "Startup Failure Rate", value: 45 },
];

const COLORS = ["#FD8F02", "#34312C", "#999999", "#000000", "#CCCCCC"];

function pivotDataToChart(data) {
  const years = Array.from(new Set(data.map((d) => d.year))).sort();
  const categories = Array.from(new Set(data.map((d) => d.category))).sort();
  return {
    result: years.map((y) => {
      const row = { year: String(y) };
      categories.forEach((c) => {
        const found = data.find((d) => d.year === y && d.category === c);
        row[c] = found ? found.value : 0;
      });
      return row;
    }),
    categories,
  };
}

const CustomTooltip = ({ active, payload, label }) =>
  active && payload && payload.length ? (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
      <p className="font-semibold text-[#34312C] mb-2">{`Year: ${label}`}</p>
      {payload.map((entry, i) => (
        <p key={i} className="text-sm" style={{ color: entry.color }}>
          {`${entry.dataKey}: ${entry.value}${entry.dataKey === 'Startup Failure Rate' ? '%' : ''}`}
        </p>
      ))}
    </div>
  ) : null;

export default function StartupAnalyticsPage() {
  const [raw, setRaw] = useState(mockData);
  const [chartData, setChartData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const { result, categories } = pivotDataToChart(raw);
    setChartData(result);
    setCategories(categories);
  }, [raw]);

  const filtered = raw.filter((r) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      String(r.year).includes(q) ||
      r.category.toLowerCase().includes(q) ||
      String(r.value).includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#F9F9F9] p-6">
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#34312C] mb-4">
            India Startup Ecosystem Analytics
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tracking India's startup evolution from metro hubs to Tier-2/3 city expansion and the impact on startup success rates.
          </p>
        </div>

        {/* Info + Featured Metrics Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#34312C]">
                India's Startup Growth Story
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Post-lockdown data reveals unprecedented growth in Tier-2 and Tier-3 cities, with startup activity spreading beyond traditional hubs. Understanding these geographic shifts helps founders, investors, and policymakers build stronger regional ecosystems.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>46 Indian cities now feature in global startup rankings</li>
                <li>70% failure rate driven by fragmented local ecosystems</li>
                <li>Tier-2/3 cities showing strongest growth momentum</li>
              </ul>
            </div>

            {/* Right Featured Metrics */}
            <div>
              <h2 className="text-2xl font-bold text-[#34312C] mb-4">
                Key Ecosystem Metrics
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#FD8F02]/20 bg-[#FD8F02]/10">
                  <h3 className="text-lg font-semibold text-[#FD8F02]">
                    Active Startup Cities
                  </h3>
                  <p className="text-sm text-[#34312C]">
                    Number of Indian cities featuring in global startup ecosystem rankings.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#FD8F02]/20 bg-[#FD8F02]/10">
                  <h3 className="text-lg font-semibold text-[#FD8F02]">
                    Tier-2/3 City Growth
                  </h3>
                  <p className="text-sm text-[#34312C]">
                    Percentage growth of startup activity in emerging cities beyond metros.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#FD8F02]/20 bg-[#FD8F02]/10">
                  <h3 className="text-lg font-semibold text-[#FD8F02]">
                    Startup Failure Rate
                  </h3>
                  <p className="text-sm text-[#34312C]">
                    Percentage of Indian startups failing within first 5 years of operation.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#FD8F02]/20 bg-[#FD8F02]/10">
                  <h3 className="text-lg font-semibold text-[#FD8F02]">
                    Ecosystem Impact
                  </h3>
                  <p className="text-sm text-[#34312C]">
                    How geographic expansion correlates with startup success rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Startup Ecosystem Overview */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#34312C] mb-6">
            India's Startup Ecosystem Evolution (2020-2025)
          </h2>
          <div style={{ height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                <XAxis dataKey="year" stroke="#34312C" />
                <YAxis stroke="#34312C" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {categories.map((c, i) => (
                  <Bar
                    key={c}
                    dataKey={c}
                    stackId="a"
                    fill={COLORS[i % COLORS.length]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#34312C] mb-6">
            Current Startup Landscape (2024)
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-[#FD8F02]/5 rounded-lg">
              <div className="text-3xl font-bold text-[#FD8F02]">1.1L+</div>
              <div className="text-sm text-[#34312C]">Startups Launched</div>
            </div>
            <div className="text-center p-4 bg-[#FD8F02]/5 rounded-lg">
              <div className="text-3xl font-bold text-[#FD8F02]">46</div>
              <div className="text-sm text-[#34312C]">Active Cities</div>
            </div>
            <div className="text-center p-4 bg-[#FD8F02]/5 rounded-lg">
              <div className="text-3xl font-bold text-[#FD8F02]">70%</div>
              <div className="text-sm text-[#34312C]">5-Year Failure Rate</div>
            </div>
            <div className="text-center p-4 bg-[#FD8F02]/5 rounded-lg">
              <div className="text-3xl font-bold text-[#FD8F02]">40%</div>
              <div className="text-sm text-[#34312C]">YoY Growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}