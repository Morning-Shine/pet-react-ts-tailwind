import React, { useCallback } from 'react';
import { MODE_LIGHT, MODE_DARK } from 'constants/theme/theme';
import Switcher from '../switcher';
import { BsFillSunFill } from 'react-icons/bs';
import { RxMoon } from 'react-icons/rx';
import useChangeMode from 'utils/hooks/useChangeMode';


const ControlPanel: React.FC = (props) => {
  const [isDarkMode, onModeChange] = useChangeMode();

  const onSwitchChange = useCallback(
    (checked: boolean) => {
      onModeChange(checked ? MODE_DARK : MODE_LIGHT);
    },
    [onModeChange]
  );

  return (
     <div className="flex items-center">
      <div className="mr-10">
        <Switcher
          checked={isDarkMode}
          onChange={(checked) => onSwitchChange(checked)}
          leftContent={<BsFillSunFill />}
          rightContent={<RxMoon />}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
