import React from 'react';
import Header from './components/header';
import { COLOR_CONTRAST } from 'constants/colors/colors.constants';
import AppRoutes from 'components/routes';
import './App.css';

const App: React.FC = () => {
  return (
    <div
      // className={`bg-neutral-50 dark:bg-neutral-800 h-screen`}
      // className={`bg-pink-500 dark:bg-${COLOR_CONTRAST}-800 h-full min-h-screen`}
      className={`bg-${COLOR_CONTRAST}-50 dark:bg-${COLOR_CONTRAST}-800 h-full min-h-screen
       flex flex-col`}
    >
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
