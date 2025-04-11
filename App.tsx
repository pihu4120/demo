import React from 'react';
import { Activity, Box, ShoppingCart, Truck, Users, Warehouse } from 'lucide-react';

interface AgentCardProps {
  title: string;
  icon: React.ReactNode;
  status: 'active' | 'inactive';
  metrics: {
    label: string;
    value: string;
  }[];
}

const AgentCard: React.FC<AgentCardProps> = ({ title, icon, status, metrics }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm ${
        status === 'active' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="space-y-1">
          <p className="text-sm text-gray-500">{metric.label}</p>
          <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const agents = [
    {
      title: 'Store Agent',
      icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
      status: 'active' as const,
      metrics: [
        { label: 'Current Stock', value: '2,345 units' },
        { label: 'Restock Requests', value: '12 pending' },
      ],
    },
    {
      title: 'Warehouse Agent',
      icon: <Warehouse className="w-5 h-5 text-blue-600" />,
      status: 'active' as const,
      metrics: [
        { label: 'Total Inventory', value: '12,456 units' },
        { label: 'Utilization', value: '78%' },
      ],
    },
    {
      title: 'Supplier Agent',
      icon: <Truck className="w-5 h-5 text-blue-600" />,
      status: 'active' as const,
      metrics: [
        { label: 'Orders Processing', value: '8 orders' },
        { label: 'Lead Time', value: '3.2 days' },
      ],
    },
    {
      title: 'Customer Agent',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      status: 'active' as const,
      metrics: [
        { label: 'Active Sessions', value: '1,234' },
        { label: 'Conversion Rate', value: '3.8%' },
      ],
    },
    {
      title: 'Pricing Agent',
      icon: <Box className="w-5 h-5 text-blue-600" />,
      status: 'active' as const,
      metrics: [
        { label: 'Price Updates', value: '145 today' },
        { label: 'Margin', value: '+2.4%' },
      ],
    },
    {
      title: 'Forecasting Agent',
      icon: <Activity className="w-5 h-5 text-blue-600" />,
      status: 'active' as const,
      metrics: [
        { label: 'Accuracy', value: '94.2%' },
        { label: 'Predictions', value: '24,567' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Retail Inventory AI Dashboard</h1>
          <p className="mt-2 text-gray-600">Multi-Agent System Status Overview</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;