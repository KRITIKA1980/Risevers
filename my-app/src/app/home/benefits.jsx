import { 
  GraduationCap, Sprout, Heart, Users, Shield, Target, Sparkles, Zap, TrendingUp 
} from 'lucide-react';

const ExpectedImpactSection = () => {
  const impactData = [
    {
      icon: GraduationCap,
      title: "Education",
      metric: "2.3M",
      label: "Students Empowered",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=300&h=160&fit=crop&crop=faces",
      accent: "bg-gray-700"
    },
    {
      icon: Sprout,
      title: "Agriculture",
      metric: "1.8M",
      label: "Farmers Supported",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=160&fit=crop&crop=center",
      accent: "bg-gray-600"
    },
    {
      icon: Heart,
      title: "Disaster Relief",
      metric: "850K",
      label: "Families Helped",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=160&fit=crop&crop=center",
      accent: "bg-gray-800"
    },
    {
      icon: Users,
      title: "Rural Dev",
      metric: "3.2M",
      label: "Lives Changed",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=160&fit=crop&crop=center",
      accent: "bg-gray-700"
    },
    {
      icon: Shield,
      title: "Governance",
      metric: "650+",
      label: "Districts Served",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=160&fit=crop&crop=center",
      accent: "bg-gray-600"
    },
    {
      icon: Target,
      title: "Healthcare",
      metric: "1.2M",
      label: "Patients Treated",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=160&fit=crop&crop=center",
      accent: "bg-gray-800"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-gray-300 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-200 rounded-full opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: '#1c2e57' }}>
            Real Impact, <span className="text-gray-800">Real Stories</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Transforming millions of lives through accessible governance and meaningful change
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#1c2e57' }}>8.2M+</div>
              <div className="text-sm text-gray-500">Lives Impacted</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#1c2e57' }}>650+</div>
              <div className="text-sm text-gray-500">Districts</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#1c2e57' }}>95%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impactData.map((item, index) => {
            const randomPercent = Math.floor(Math.random() * 40 + 60);
            const randomGrowth = Math.floor(Math.random() * 30 + 10);
            const Icon = item.icon;

            return (
              <div key={index} className="group relative">
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gray-400 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-all duration-500"></div>

                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-gray-300 transform hover:-translate-y-1">
                  {/* Image Section */}
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80"></div>

                    {/* Icon */}
                    <div className="absolute top-3 left-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" style={{ color: '#1c2e57' }} />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium" style={{ color: '#1c2e57' }}>Active</span>
                      </div>
                    </div>

                    {/* Category Title */}
                    <div className="absolute bottom-3 left-3">
                      <h3 className="font-bold text-lg text-white">{item.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gray-600 text-sm mb-4">{item.label}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-black" style={{ color: '#1c2e57' }}>
                          {item.metric}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-medium">+{randomGrowth}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          backgroundColor: '#1c2e57',
                          width: `${randomPercent}%`
                        }}
                      ></div>
                    </div>

                    {/* Button */}
                    <button 
                      className="w-full py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-300 hover:shadow-md border border-gray-300"
                      style={{ backgroundColor: '#1c2e57' }}
                    >
                      View Impact Stories
                    </button>
                  </div>

                  {/* Decorative Bottom Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: '#1c2e57' }}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Impact Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Zap, title: "Instant Access", desc: "Citizens connect with government schemes in minutes, not months" },
            { icon: Target, title: "Targeted Support", desc: "Personalized guidance ensures every citizen gets the right help" },
            { icon: Sparkles, title: "Lasting Change", desc: "Sustainable solutions that create generational impact" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                     style={{ backgroundColor: '#1c2e57' }}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#1c2e57' }}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpectedImpactSection;
