import React from 'react';
import { BarChart, Users, Sword, Package, Scroll, Gift } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard icon={<Users size={24} />} title="Total Users" value="1,234" />
        <StatCard icon={<Sword size={24} />} title="Active Characters" value="987" />
        <StatCard icon={<Package size={24} />} title="Items in Circulation" value="5,678" />
        <StatCard icon={<Scroll size={24} />} title="Open Quests" value="42" />
        <StatCard icon={<Gift size={24} />} title="Rewards Claimed" value="3,210" />
        <StatCard icon={<BarChart size={24} />} title="System Health" value="98%" />
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="mr-4 text-blue-500">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <p className="text-3xl font-bold text-gray-700">{value}</p>
  </div>
);

export default Dashboard;