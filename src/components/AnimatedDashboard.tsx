import React from 'react';

const AnimatedDashboard = () => {
  return (
    <div className="relative w-[100%] h-[30rem] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
      {/* Dashboard Container */}
      <div className="absolute inset-5 bg-white rounded-lg shadow-lg p-7">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center space-x-4">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="text-base font-medium text-gray-600">Analytics Dashboard</span>
          </div>
          <div className="flex space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>

        {/* Main Chart Area */}
        <div className="relative h-40 mb-5">
          <svg className="w-full h-full" viewBox="0 0 330 125">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
                <path d="M 22 0 L 0 0 0 22" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated line chart */}
            <path
              d="M 12 100 Q 55 25 100 50 T 187 37 Q 230 12 275 31 T 320 44"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.2"
              strokeDasharray="6,6"
              className="animate-pulse"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;12;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* Data points */}
            <circle cx="55" cy="37" r="3.5" fill="#2563eb" className="animate-bounce delay-100">
              <animate attributeName="cy" values="37;31;37" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="110" cy="50" r="3.5" fill="#2563eb" className="animate-bounce delay-200">
              <animate attributeName="cy" values="50;44;50" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="165" cy="37" r="3.5" fill="#2563eb" className="animate-bounce delay-300">
              <animate attributeName="cy" values="37;31;37" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="220" cy="31" r="3.5" fill="#2563eb" className="animate-bounce delay-400">
              <animate attributeName="cy" values="31;25;31" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* KPI Cards */}
        <div className="flex justify-between space-x-4">
          <div className="flex-1 bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Clients</div>
                <div className="text-base font-semibold text-primary animate-pulse">600+</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-green-500 rounded flex items-center justify-center">
                <div className="w-3 h-4 bg-white rounded-sm"></div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Partners</div>
                <div className="text-base font-semibold text-green-600 animate-pulse">15+</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-orange-50 rounded-lg p-4 hidden lg:block">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-orange-500 rounded flex items-center justify-center">
                <div className="w-4 h-3 bg-white rounded-sm"></div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Users</div>
                <div className="text-base font-semibold text-orange-600 animate-pulse">847K</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating + Icons scaled as well */}
      <div className="absolute top-5 right-5 w-4 h-4 bg-primary/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-green-400/40 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-orange-400/50 rounded-full animate-bounce delay-500"></div>
      
      <div className="absolute top-7 left-1/4 opacity-20">
        <div className="w-7 h-7 bg-primary rounded border-2 border-primary animate-pulse"></div>
      </div>
      <div className="absolute bottom-7 right-1/4 opacity-20">
        <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce delay-700"></div>
      </div>
      <div className="absolute top-1/3 right-14 opacity-20">
        <div className="w-5 h-7 bg-orange-500 rounded animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default AnimatedDashboard;
