import React, { useCallback } from 'react';
import Switcher from 'components/switcher';
import { FaAddressCard, FaTableList } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';
import { COLOR_CONTRAST } from 'constants/colors/colors.constants';
import { TOOLTIPS } from 'constants/enums/tooltips';
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux';
import { changeView } from 'store/usersSlice';

const ChangeUsersView: React.FC = () => {
  const view = useAppSelector((state) => state.users.view);
  const dispatch = useAppDispatch();

  const onSwitchChange = useCallback(
    (checked: boolean) => {
      dispatch(changeView(checked ? 'table' : 'cards'));
    },
    [view]
  );

  return (
    <div className="w-full pt-6">
      <div
        className="w-min rounded-full border-teal-700"
        id="users-view-switcher"
      >
        <Switcher
          checked={view === 'table'}
          onChange={(checked) => onSwitchChange(checked)}
          leftContent={<FaAddressCard />}
          rightContent={<FaTableList />}
        />
      </div>
      <Tooltip
        anchorSelect={'#users-view-switcher'}
        content={TOOLTIPS.usersView}
        place="right"
        className={`dark:bg-${COLOR_CONTRAST}-500`}
        delayShow={1500}
      />
    </div>
  );
};

export default ChangeUsersView;
