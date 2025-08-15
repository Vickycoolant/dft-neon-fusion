import React from 'react';

const AnimatedDashboard = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
      {/* Dashboard Container */}
      <div className="absolute inset-4 bg-white rounded-lg shadow-lg p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-sm font-medium text-gray-600">Analytics Dashboard</span>
          </div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>

        {/* Main Chart Area */}
        <div className="relative h-32 mb-4">
          <svg className="w-full h-full" viewBox="0 0 300 100">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated line chart */}
            <path
              d="M 10 80 Q 50 20 90 40 T 170 30 Q 210 10 250 25 T 290 35"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;10;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* Data points */}
            <circle cx="50" cy="30" r="3" fill="#2563eb" className="animate-bounce delay-100">
              <animate attributeName="cy" values="30;25;30" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="40" r="3" fill="#2563eb" className="animate-bounce delay-200">
              <animate attributeName="cy" values="40;35;40" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="150" cy="30" r="3" fill="#2563eb" className="animate-bounce delay-300">
              <animate attributeName="cy" values="30;25;30" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="25" r="3" fill="#2563eb" className="animate-bounce delay-400">
              <animate attributeName="cy" values="25;20;25" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* KPI Cards */}
        <div className="flex justify-between space-x-3">
          <div className="flex-1 bg-blue-50 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Revenue</div>
                <div className="text-sm font-semibold text-primary animate-pulse">$2.4M</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-green-50 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                <div className="w-2 h-3 bg-white rounded-sm"></div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Growth</div>
                <div className="text-sm font-semibold text-green-600 animate-pulse">+23%</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-orange-50 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                <div className="w-3 h-2 bg-white rounded-sm"></div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Users</div>
                <div className="text-sm font-semibold text-orange-600 animate-pulse">847K</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-primary/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-8 left-8 w-2 h-2 bg-green-400/40 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-8 w-1 h-1 bg-orange-400/50 rounded-full animate-bounce delay-500"></div>
      
      {/* Industry Icons */}
      <div className="absolute top-6 left-1/4 opacity-20">
        <div className="w-6 h-6 bg-primary rounded border-2 border-primary animate-pulse"></div>
      </div>
      <div className="absolute bottom-6 right-1/4 opacity-20">
        <div className="w-5 h-5 bg-green-500 rounded-full animate-bounce delay-700"></div>
      </div>
      <div className="absolute top-1/3 right-12 opacity-20">
        <div className="w-4 h-6 bg-orange-500 rounded animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default AnimatedDashboard;