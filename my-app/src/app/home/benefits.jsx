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
  { year: 2021, category: "Global Layoffs", value: 100 },
  { year: 2021, category: "New Startups Formed", value: 25 },
  { year: 2021, category: "Funding Activity", value: 10 },
  { year: 2022, category: "Global Layoffs", value: 50 },
  { year: 2022, category: "New Startups Formed", value: 60 },
  { year: 2022, category: "RiseVerse Demand", value: 15 },
  { year: 2023, category: "Global Layoffs", value: 20 },
  { year: 2023, category: "New Startups Formed", value: 5 },
  { year: 2023, category: "RiseVerse Demand", value: 0 },
  { year: 2023, category: "Funding Activity", value: 8 },
  { year: 2024, category: "RiseVerse Demand", value: 30 },
  { year: 2024, category: "Funding Activity", value: 40 },
  { year: 2024, category: "New Startups Formed", value: 10 },
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
          {`${entry.dataKey}: ${entry.value}`}
        </p>
      ))}
    </div>
  ) : null;

export default function LayoffsPage() {
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
            Startup Layoffs Analytics
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Analyze how startup ecosystem evolved year by year — from layoffs to
            funding, growth, and demand.
          </p>
        </div>

        {/* Info + Featured Metrics Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#34312C]">
                About Startup Insights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This data reflects how the startup ecosystem behaves — from
                layoffs and new company formation to funding activities and
                demand patterns. Understanding these shifts helps policy makers,
                investors, and founders make data-driven moves.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Tracks yearly ecosystem growth patterns</li>
                <li>Shows rise and fall of startup funding & demand</li>
                <li>Identifies overall startup health trends</li>
              </ul>
            </div>

            {/* Right Featured Metrics */}
            <div>
              <h2 className="text-2xl font-bold text-[#34312C] mb-4">
                Key Insights
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#FD8F02]/20 bg-[#FD8F02]/10">
                  <h3 className="text-lg font-semibold text-[#FD8F02]">
                    Global Layoffs
                  </h3>
                  <p className="text-sm text-[#34312C]">
                    Represents worldwide startup layoffs and job contraction
                    trends.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#FD8F02]/20 bg-[#FD8F02]/10">
                  <h3 className="text-lg font-semibold text-[#FD8F02]">
                    New Startups Formed
                  </h3>
                  <p className="text-sm text-[#34312C]">
                    Highlights the number of new startups established each year.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#FD8F02]/20 bg-[#FD8F02]/10">
                  <h3 className="text-lg font-semibold text-[#FD8F02]">
                    Funding Activity
                  </h3>
                  <p className="text-sm text-[#34312C]">
                    Reflects the amount of funding and investment trends in
                    startups.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#FD8F02]/20 bg-[#FD8F02]/10">
                  <h3 className="text-lg font-semibold text-[#FD8F02]">
                    RiseVerse Demand
                  </h3>
                  <p className="text-sm text-[#34312C]">
                    Tracks how demand for RiseVerse ecosystem tools evolved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layoffs Overview */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#34312C] mb-6">
            Yearly Overview
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
      </div>
    </div>
  );
}
