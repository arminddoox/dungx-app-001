import React from 'react';
import { Header } from './components/common';
import { FoodLibraryPage, AchievementsPage, FinancePage, ProfilePage } from './components/pages';
import { useNavigation } from './hooks';
import "./styles/global.css"

const App = () => {
  const { currentRoute, navigate } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'food-library':
        return <FoodLibraryPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'finance':
        return <FinancePage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <FoodLibraryPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header currentRoute={currentRoute} navigate={navigate} />
      <main className="max-w-6xl mx-auto p-6">
        {renderCurrentPage()}
      </main>
    </div>
  );
};

export default App;