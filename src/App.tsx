import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Characters from './pages/Characters';
import Inventory from './pages/Inventory';
import Quests from './pages/Quests';
import Rewards from './pages/Rewards';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;