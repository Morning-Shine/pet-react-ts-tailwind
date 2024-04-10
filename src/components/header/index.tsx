import React from 'react';
import MainMenu from 'components/mainMenu';
import ControlPanel from 'components/controlPanel';
import { COLOR_MAIN } from 'constants/styles/colors.constants';
import { HEADER_HEIGTH } from 'constants/styles/sizes.constants';

const Header: React.FC = () => {
  return (
    <header className={`bg-${COLOR_MAIN}-700 h-${HEADER_HEIGTH} w-full fixed flex md:flex-row`}>
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
