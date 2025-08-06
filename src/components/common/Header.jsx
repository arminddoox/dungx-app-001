import React from 'react';
import { User, BookOpen, Trophy, DollarSign } from 'lucide-react';
import { NAVIGATION_ITEMS, USER_PROFILE } from '../../constants';

const iconMap = {
  BookOpen,
  Trophy,
  DollarSign,
  User
};

export const Header = ({ currentRoute, navigate }) => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <User className="text-white" size={24} />
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold">{USER_PROFILE.username}</h1>
          </div>
        </div>
        <nav className="flex space-x-2">
          {NAVIGATION_ITEMS.map((item) => {
            const IconComponent = iconMap[item.icon];
            const isActive = currentRoute === item.route;
            
            return (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-white text-purple-600 shadow-lg' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <IconComponent size={20} className="inline mr-2" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};