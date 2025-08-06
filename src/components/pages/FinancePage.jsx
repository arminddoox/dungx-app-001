import React from 'react';
import { User, DollarSign, PieChart, TrendingUp, BarChart3 } from 'lucide-react';
import { USER_PROFILE } from '../../constants';
import { formatCurrency, formatVND } from '../../utils';

const weekData = ['T3', 'T4', 'T5', 'T6', 'T7', 'T8'];

export const FinancePage = () => {
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
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
              <DollarSign className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Quản lý tài chính</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded"></div>
            <div className="w-4 h-4 bg-green-400 rounded"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded"></div>
            <div className="w-4 h-4 bg-red-400 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Số dư khả dụng</h4>
            <div className="text-4xl font-bold text-green-600 mb-4">
              {formatCurrency(12900678)}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
              <PieChart className="text-purple-600" size={60} />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-6">Tổng thu/chi trong tháng 8</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <TrendingUp className="text-white" size={32} />
              </div>
              <div>
                <div className="text-sm text-gray-600">Số tiền đã nạp</div>
                <div className="text-2xl font-bold text-green-600">
                  {formatVND(16980000)}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Thu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-600">Chi</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                <BarChart3 className="text-white" size={32} />
              </div>
              <div>
                <div className="text-sm text-gray-600">Tổng chi</div>
                <div className="text-2xl font-bold text-red-600">
                  {formatVND(4079322)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Biến động Thu/Chi</h4>
          <p className="text-gray-600 mb-6">Thiết lập ngân sách để chi tiêu hiệu quả hơn</p>
          
          <div className="flex items-end justify-between mb-6 h-32">
            {weekData.map((day, index) => (
              <div key={day} className="flex flex-col items-center space-y-2">
                <div className="flex flex-col items-center space-y-1">
                  <div className={`w-6 rounded-t ${
                    index === 2 ? 'h-20 bg-green-500' : 'h-12 bg-green-400'
                  }`}></div>
                  <div className={`w-6 rounded-b ${
                    index === 5 ? 'h-16 bg-red-500' : 'h-8 bg-red-400'
                  }`}></div>
                </div>
                <span className="text-sm text-gray-600">{day}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Chi tiêu so với tháng 7</div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">60%</span>
                </div>
                <div className="text-3xl font-bold text-red-600">60%</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
            

        