import React from 'react';
import { BookOpen } from 'lucide-react';
import { UserStats } from '../common';

export const FoodLibraryPage = () => {
  return (
    <div className="space-y-8">
      <UserStats />
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Thư viện đồ ăn</h3>
          </div>
          <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
            Ghi chú
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-gradient-to-r from-orange-200 to-orange-300 rounded-lg hover:shadow-md transition-shadow cursor-pointer"></div>
            <div className="h-20 bg-gradient-to-r from-red-200 to-red-300 rounded-lg hover:shadow-md transition-shadow cursor-pointer"></div>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-lg hover:shadow-md transition-shadow cursor-pointer"></div>
            <div className="h-20 bg-gradient-to-r from-green-200 to-green-300 rounded-lg hover:shadow-md transition-shadow cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};