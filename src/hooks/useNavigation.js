import { useState } from 'react';
import { ROUTES } from '../constants';

export const useNavigation = (initialRoute = ROUTES.FOOD_LIBRARY) => {
  const [currentRoute, setCurrentRoute] = useState(initialRoute);

  const navigate = (route) => {
    if (Object.values(ROUTES).includes(route)) {
      setCurrentRoute(route);
    }
  };

  return {
    currentRoute,
    navigate
  };
};