import React from 'react';
import MainMenu from 'components/mainMenu';
import ControlPanel from 'components/controlPanel';

const Header: React.FC = () => {
  return (
    <header className="bg-teal-700 h-20 relative flex  md:flex-row">
      <div className="w-full flex justify-center">
        <MainMenu />
      </div>
      <div className="h-full md:absolute right-0 flex justify-items-center">
        <ControlPanel />
      </div>
    </header>
  );
};

export default Header;
