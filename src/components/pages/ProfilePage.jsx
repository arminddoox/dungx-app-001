import React from 'react';
import { User, Users } from 'lucide-react';
import { USER_PROFILE, FAMILY_MEMBERS } from '../../constants';

export const ProfilePage = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-8">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <User size={40} className="text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{USER_PROFILE.name}</h2>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Hồ sơ</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded"></div>
            <div className="w-4 h-4 bg-green-400 rounded"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded"></div>
            <div className="w-4 h-4 bg-red-400 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {FAMILY_MEMBERS.map((member) => (
              <div key={member.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center`}>
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{member.label}</div>
                  <div className="text-sm text-gray-600">{member.age}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Thực đơn gia đình
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lên thực đơn phù hợp với từng thành viên trong gia đình thông qua hồ sơ sức khỏe của họ
              </p>
              <div className="mt-6 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                <Users className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};