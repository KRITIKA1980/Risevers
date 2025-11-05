'use client';

import { useMemo, useState } from 'react';
import { FaStar, FaUsers, FaChartBar, FaIndustry, FaBuilding, FaUserTie, FaHandshake } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#FD8F02', '#34312C', '#6366F1', '#10B981', '#8B5CF6'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const benefitScore = payload.find(p => p.dataKey === 'benefitScore')?.value;
    const investorInterest = payload.find(p => p.dataKey === 'investorInterest')?.value;

    return (
      <div className="bg-white/95 backdrop-blur-sm p-4 border border-gray-200/50 rounded-xl shadow-2xl">
        <p className="font-bold text-[#34312C] mb-2">{label}</p>
        {benefitScore !== undefined && (
          <p className="text-sm text-green-600 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Benefit Score: <span className="font-semibold">{benefitScore}</span>
          </p>
        )}
        {investorInterest !== undefined && (
          <p className="text-sm text-blue-600 flex items-center gap-2 mt-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Investor Interest: <span className="font-semibold">{investorInterest}</span>
          </p>
        )}
      </div>
    );
  }
  return null;
};

const StartupDetailModal = ({ startup, isOpen, onClose }) => {
  if (!isOpen || !startup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1)'
        }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#34312C] bg-gradient-to-r from-[#34312C] to-[#FD8F02] bg-clip-text text-transparent">
              {startup.name}
            </h3>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl border border-blue-200/50 transform transition-transform duration-200 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaUsers className="text-white text-lg" />
              </div>
              <div>
                <p className="font-bold text-2xl text-blue-900">{startup.investorsCount || 0}</p>
                <p className="text-sm text-blue-700/80">Investors</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-green-50/80 backdrop-blur-sm rounded-xl border border-green-200/50 transform transition-transform duration-200 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaUserTie className="text-white text-lg" />
              </div>
              <div>
                <p className="font-bold text-2xl text-green-900">{startup.mentorsCount || 0}</p>
                <p className="text-sm text-green-700/80">Mentors</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-purple-50/80 backdrop-blur-sm rounded-xl border border-purple-200/50 transform transition-transform duration-200 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaHandshake className="text-white text-lg" />
              </div>
              <div>
                <p className="font-bold text-2xl text-purple-900">{startup.partnersCount || 0}</p>
                <p className="text-sm text-purple-700/80">Partners</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200/50 shadow-sm transform transition-transform duration-200 hover:scale-[1.02]">
                <p className="text-3xl font-bold text-[#34312C]">{startup.riseverseBenefitScore || 0}</p>
                <p className="text-sm text-gray-600 mt-1">Benefit Score</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200/50 shadow-sm transform transition-transform duration-200 hover:scale-[1.02]">
                <p className="text-3xl font-bold text-[#34312C]">{startup.investorInterest || 0}</p>
                <p className="text-sm text-gray-600 mt-1">Investor Interest</p>
              </div>
            </div>
            
            {startup.industry && (
              <div className="mt-4 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200/50 transform transition-transform duration-200 hover:scale-[1.02]">
                <p className="text-sm font-semibold text-orange-900 mb-1">Industry</p>
                <p className="text-orange-700/80 font-medium">{startup.industry}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const KPICard = ({ title, value, icon, color }) => (
  <div 
    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,0.1)'
    }}
  >
    <div className="flex items-center gap-5">
      <div 
        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 ${color}`}
        style={{
          background: `linear-gradient(135deg, ${color.replace('bg-', '#').split('-')[0]} 0%, ${color.replace('bg-', '#').split('-')[1] || color.replace('bg-', '#').split('-')[0]} 100%)`
        }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold text-[#34312C] mb-1">{value}</h3>
        <p className="text-gray-600 font-medium">{title}</p>
      </div>
    </div>
  </div>
);

const StartupDashboard = ({ startups }) => {
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    totalStartups,
    totalInvestorInterest,
    averageBenefitScore,
    industryDistribution,
    topPerformersChartData,
  } = useMemo(() => {
    const totalStartups = startups.length;
    const totalInvestorInterest = startups.reduce((acc, s) => acc + (s.investorInterest || 0), 0);
    const averageBenefitScore = totalStartups > 0
      ? Math.round(startups.reduce((acc, s) => acc + (s.riseverseBenefitScore || 0), 0) / totalStartups)
      : 0;

    const industryCounts = startups.reduce((acc, s) => {
      const industry = s.industry || 'Uncategorized';
      acc[industry] = (acc[industry] || 0) + 1;
      return acc;
    }, {});

    const industryDistribution = Object.keys(industryCounts).map(name => ({
      name,
      value: industryCounts[name],
    }));

    const top5ByBenefit = [...startups]
      .sort((a, b) => (b.riseverseBenefitScore || 0) - (a.riseverseBenefitScore || 0))
      .slice(0, 5);

    const topPerformersChartData = top5ByBenefit.map(startup => ({
      name: startup.name,
      benefitScore: startup.riseverseBenefitScore || 0,
      investorInterest: startup.investorInterest || 0,
      investorsCount: startup.investorsCount || 0,
      mentorsCount: startup.mentorsCount || 0,
      partnersCount: startup.partnersCount || 0,
      fullData: startup
    }));

    return { 
      totalStartups, 
      totalInvestorInterest, 
      averageBenefitScore, 
      industryDistribution, 
      topPerformersChartData 
    };
  }, [startups]);

  const handleBarClick = (data) => {
    if (data && data.activePayload && data.activePayload[0]) {
      const startupData = data.activePayload[0].payload.fullData;
      setSelectedStartup(startupData);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStartup(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 shadow-2xl mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FD8F02] to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
              <FaChartBar className="text-white text-xl" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#34312C] via-[#FD8F02] to-amber-600 bg-clip-text text-transparent">
                RiseVerse Analytics
              </h2>
              <p className="text-gray-600 mt-1 font-medium">Startup Ecosystem Performance Dashboard</p>
            </div>
          </div>
        </div>



        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Bar Chart - Top Performers */}
          <div 
            className="xl:col-span-3 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl transform transition-all duration-300 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)'
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-[#34312C] flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FD8F02] to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaStar className="text-white text-lg" />
                  </div>
                  Top Performers
                </h3>
                <p className="text-gray-600 mt-2">Top 5 startups by platform benefit score</p>
              </div>
            </div>
            <div style={{ height: '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={topPerformersChartData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                  onClick={handleBarClick}
                >
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                    tick={{ fontSize: 12, fontWeight: 500 }}
                  />
                  <YAxis />
                  <Tooltip 
                    content={<CustomTooltip />} 
                    cursor={{ fill: 'rgba(253, 143, 2, 0.1)' }} 
                  />
                  <Bar 
                    dataKey="benefitScore" 
                    name="Benefit Score" 
                    radius={[8, 8, 0, 0]}
                    barSize={50}
                    cursor="pointer"
                  >
                    {topPerformersChartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]}
                        style={{
                          filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                        }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">Click on any bar to view detailed metrics</p>
          </div>

          {/* Pie Chart - Industry Distribution */}
          <div 
            className="xl:col-span-2 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl transform transition-all duration-300 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)'
            }}
          >
            <h3 className="text-2xl font-bold text-[#34312C] flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FD8F02] to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <FaIndustry className="text-white text-lg" />
              </div>
              Industry Distribution
            </h3>
            <div style={{ height: '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={industryDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {industryDistribution.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]}
                        style={{
                          filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend 
                    iconSize={12}
                    wrapperStyle={{ fontSize: '12px', fontWeight: 500 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Startup Detail Modal */}
        <StartupDetailModal 
          startup={selectedStartup}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default StartupDashboard;