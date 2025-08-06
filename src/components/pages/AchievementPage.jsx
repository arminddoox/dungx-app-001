import React from 'react';
import { Trophy } from 'lucide-react';
import { UserStats } from '../common';

const achievements = [
  {
    id: 1,
    title: 'Huy chương vàng',
    description: 'Hoàn thành xuất sắc',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50'
  },
  {
    id: 2,
    title: 'Huy chương bạc',
    description: 'Hoàn thành tốt',
    color: 'from-gray-400 to-gray-500',
    bgColor: 'from-gray-50 to-gray-100'
  },
  {
    id: 3,
    title: 'Huy chương đồng',
    description: 'Hoàn thành khá',
    color: 'from-orange-600 to-red-600',
    bgColor: 'from-orange-50 to-red-50'
  }
];

export const AchievementsPage = () => {
  return (
    <div className="space-y-8">
      <UserStats />
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
            <Trophy className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Thành tích</h3>
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center ml-auto">
            <Trophy className="text-white" size={32} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`text-center p-6 bg-gradient-to-br ${achievement.bgColor} rounded-xl hover:shadow-lg transition-shadow cursor-pointer`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <Trophy className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};