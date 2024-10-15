import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Sword, Package, Scroll, Gift } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Gamification System</Link>
        <div className="space-x-4">
          <NavLink to="/" icon={<Home size={18} />} text="Dashboard" />
          <NavLink to="/users" icon={<Users size={18} />} text="Users" />
          <NavLink to="/characters" icon={<Sword size={18} />} text="Characters" />
          <NavLink to="/inventory" icon={<Package size={18} />} text="Inventory" />
          <NavLink to="/quests" icon={<Scroll size={18} />} text="Quests" />
          <NavLink to="/rewards" icon={<Gift size={18} />} text="Rewards" />
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center hover:text-blue-200 transition-colors duration-200">
    {icon}
    <span className="ml-1">{text}</span>
  </Link>
);

export default Navbar;