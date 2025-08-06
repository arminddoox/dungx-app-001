import React from 'react';
import { User, MapPin, Heart, MessageCircle } from 'lucide-react';
import { USER_PROFILE } from '../../constants';

export const UserStats = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
      <div className="flex items-center space-x-8">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <User size={60} className="text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{USER_PROFILE.name}</h2>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin size={16} className="mr-2" />
            <span>{USER_PROFILE.location}</span>
          </div>
          <div className="flex space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{USER_PROFILE.stats.posts}</div>
              <div className="text-sm text-gray-600">Bài viết</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{USER_PROFILE.stats.friends}</div>
              <div className="text-sm text-gray-600">Bạn bè</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{USER_PROFILE.stats.followers}</div>
              <div className="text-sm text-gray-600">Người theo dõi</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all">
            <Heart size={16} className="inline mr-2" />
            Theo dõi
          </button>
          <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all">
            <MessageCircle size={16} className="inline mr-2" />
            Nhắn tin
          </button>
        </div>
      </div>
    </div>
  );
};